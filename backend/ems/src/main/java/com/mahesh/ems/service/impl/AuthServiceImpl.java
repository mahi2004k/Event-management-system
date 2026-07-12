package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.request.LoginRequest;
import com.mahesh.ems.dto.request.RegisterRequest;
import com.mahesh.ems.dto.response.LoginResponse;
import com.mahesh.ems.dto.response.RegisterResponse;
import com.mahesh.ems.entity.User;
import com.mahesh.ems.enums.Role;
import com.mahesh.ems.exception.EmailAlreadyExistsException;
import com.mahesh.ems.exception.PhoneAlreadyExistsException;
import com.mahesh.ems.jwt.JwtService;
import com.mahesh.ems.mapper.UserMapper;
import com.mahesh.ems.repository.UserRepository;
import com.mahesh.ems.service.interfaces.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public RegisterResponse register(RegisterRequest request){
//        Register Logic

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        if (userRepository.existsByPhone(request.getPhone())) {
            throw new PhoneAlreadyExistsException("Phone number already exists");
        }

        User user = userMapper.toEntity(request);

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(Role.USER);

        user.setEnabled(true);

        User savedUser = userRepository.save(user);

        RegisterResponse response =
                userMapper.toResponse(savedUser);

        return response;
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found"));

        String token = jwtService.generateToken(
                new org.springframework.security.core.userdetails.User(
                        user.getEmail(),
                        user.getPassword(),
                        List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
                )
        );

        return LoginResponse.builder()
                .accessToken(token)
                .tokenType("Bearer")
                .expiresIn(86400000L)
                .role(user.getRole().name())
                .message("Login Successful")
                .build();
    }
}
