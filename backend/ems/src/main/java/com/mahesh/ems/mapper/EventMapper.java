package com.mahesh.ems.mapper;

import com.mahesh.ems.dto.request.EventRequest;
import com.mahesh.ems.dto.response.EventResponse;
import com.mahesh.ems.entity.Event;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EventMapper {

    @Mapping(target = "category", ignore = true)
    Event toEntity(EventRequest request);

    @Mapping(target = "categoryId", source = "category.id")
    @Mapping(target = "categoryName", source = "category.name")
    EventResponse toResponse(Event event);

    List<EventResponse> toResponseList(List<Event> events);

    @Mapping(target = "category", ignore = true)
    void updateEntity(EventRequest request, @MappingTarget Event event);

}