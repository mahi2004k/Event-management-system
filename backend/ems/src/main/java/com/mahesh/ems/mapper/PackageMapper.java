package com.mahesh.ems.mapper;

import com.mahesh.ems.dto.request.PackageRequest;
import com.mahesh.ems.dto.response.PackageResponse;
import com.mahesh.ems.entity.EventPackage;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PackageMapper {

    @Mapping(target = "event", ignore = true)
    EventPackage toEntity(PackageRequest request);

    @Mapping(source = "event.id", target = "eventId")
    @Mapping(source = "event.title", target = "eventTitle")
    PackageResponse toResponse(EventPackage eventPackage);

    List<PackageResponse> toResponseList(List<EventPackage> eventPackages);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "event", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    void updateEntity(PackageRequest request, @MappingTarget EventPackage eventPackage);
}