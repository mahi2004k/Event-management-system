package com.mahesh.ems.mapper;

import com.mahesh.ems.dto.request.RegisterRequest;
import com.mahesh.ems.dto.response.RegisterResponse;
import com.mahesh.ems.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(RegisterRequest request);

    RegisterResponse toResponse(User user);
}
