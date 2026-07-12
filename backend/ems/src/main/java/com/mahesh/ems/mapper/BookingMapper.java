package com.mahesh.ems.mapper;

import com.mahesh.ems.dto.request.BookingRequest;
import com.mahesh.ems.dto.response.BookingResponse;
import com.mahesh.ems.entity.Booking;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BookingMapper {

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "eventPackage", ignore = true)
    @Mapping(target = "status", ignore = true)
    Booking toEntity(BookingRequest request);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.firstName", target = "userName")
    @Mapping(source = "user.email", target = "userEmail")
    @Mapping(source = "eventPackage.id", target = "packageId")
    @Mapping(source = "eventPackage.packageName", target = "packageName")
    @Mapping(source = "eventPackage.event.id", target = "eventId")
    @Mapping(source = "eventPackage.event.title", target = "eventTitle")
    BookingResponse toResponse(Booking booking);

    List<BookingResponse> toResponseList(List<Booking> bookings);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "eventPackage", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    void updateEntity(BookingRequest request, @MappingTarget Booking booking);
}