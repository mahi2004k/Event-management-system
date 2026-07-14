package com.mahesh.ems.service.interfaces;

import com.mahesh.ems.dto.response.UserResponse;

public interface UserService {

    UserResponse getProfile(String email);

}
