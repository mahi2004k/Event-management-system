package com.mahesh.ems.service.interfaces;

import com.mahesh.ems.dto.request.BookingRequest;
import com.mahesh.ems.dto.response.BookingResponse;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface BookingService {


    BookingResponse createBooking(
            BookingRequest request,
            Authentication authentication);


    List<BookingResponse> getAllBookings();


    BookingResponse getBookingById(Long id);


    List<BookingResponse> getMyBookings(
            Authentication authentication);


    List<BookingResponse> getBookingsByPackage(Long packageId);


    BookingResponse updateBooking(
            Long id,
            BookingRequest request);


    void cancelBooking(Long id);

}