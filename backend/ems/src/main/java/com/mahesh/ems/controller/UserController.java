
package com.mahesh.ems.controller;

import com.mahesh.ems.dto.response.UserResponse;
import com.mahesh.ems.entity.User;
import com.mahesh.ems.repository.UserRepository;
import com.mahesh.ems.service.interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {


    private final UserService userService;



    @GetMapping("/profile")
    public ResponseEntity<UserResponse> profile(
            Authentication authentication
    ){

        return ResponseEntity.ok(
                userService.getProfile(
                        authentication.getName()
                )
        );

    }

}