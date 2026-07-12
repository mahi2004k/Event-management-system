package com.mahesh.ems.service.interfaces;

import com.mahesh.ems.dto.request.LoginRequest;
import com.mahesh.ems.dto.request.RegisterRequest;
import com.mahesh.ems.dto.response.LoginResponse;
import com.mahesh.ems.dto.response.RegisterResponse;

public interface AuthService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
