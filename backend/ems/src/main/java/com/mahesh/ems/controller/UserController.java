package com.mahesh.ems.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @GetMapping("/api/users/me")
    public Map<String, Object> currentUser(Authentication authentication) {

        return Map.of(
                "email", authentication.getName(),
                "authorities", authentication.getAuthorities(),
                "authenticated", authentication.isAuthenticated()
        );
    }

    @GetMapping("/api/admin")
    public String admin() {
        return "Welcome Admin";
    }
}