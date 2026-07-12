package com.mahesh.ems.mapper;

import com.mahesh.ems.dto.request.CategoryRequest;
import com.mahesh.ems.dto.response.CategoryResponse;
import com.mahesh.ems.entity.EventCategory;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    EventCategory toEntity(CategoryRequest request);

    CategoryResponse toResponse(EventCategory category);

    List<CategoryResponse> toResponseList(List<EventCategory> categories);

    void updateEntity(CategoryRequest request, @MappingTarget EventCategory category);

}