package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.response.UserResponse;
import com.mahesh.ems.entity.User;
import com.mahesh.ems.repository.UserRepository;
import com.mahesh.ems.service.interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {


    private final UserRepository userRepository;


    @Override
    public UserResponse getProfile(String email) {


        User user =
                userRepository.findByEmail(email)
                        .orElseThrow(
                                () -> new RuntimeException("User not found")
                        );


        return UserResponse.builder()

                .firstName(user.getFirstName())

                .lastName(user.getLastName())

                .email(user.getEmail())

                .phone(user.getPhone())

                .role(user.getRole().name())

                .build();

    }

}
