package com.mahesh.ems.mapper;

import com.mahesh.ems.dto.request.PaymentRequest;
import com.mahesh.ems.dto.response.PaymentResponse;
import com.mahesh.ems.entity.Payment;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PaymentMapper {

    @Mapping(target = "booking", ignore = true)
    @Mapping(target = "transactionId", ignore = true)
    @Mapping(target = "amount", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "paymentDate", ignore = true)
    Payment toEntity(PaymentRequest request);

    @Mapping(source = "booking.id", target = "bookingId")
    @Mapping(source = "booking.user.id", target = "userId")
    @Mapping(source = "booking.user.firstName", target = "userName")
    @Mapping(source = "booking.eventPackage.id", target = "packageId")
    @Mapping(source = "booking.eventPackage.packageName", target = "packageName")
    @Mapping(source = "booking.eventPackage.event.id", target = "eventId")
    @Mapping(source = "booking.eventPackage.event.title", target = "eventTitle")
    PaymentResponse toResponse(Payment payment);

    List<PaymentResponse> toResponseList(List<Payment> payments);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "booking", ignore = true)
    @Mapping(target = "transactionId", ignore = true)
    @Mapping(target = "amount", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "paymentDate", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    void updateEntity(PaymentRequest request, @MappingTarget Payment payment);
}