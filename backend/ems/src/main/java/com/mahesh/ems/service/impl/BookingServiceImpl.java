package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.request.BookingRequest;
import com.mahesh.ems.dto.response.BookingResponse;
import com.mahesh.ems.entity.Booking;
import com.mahesh.ems.entity.EventPackage;
import com.mahesh.ems.entity.User;
import com.mahesh.ems.enums.BookingStatus;
import com.mahesh.ems.exception.BookingLimitExceededException;
import com.mahesh.ems.exception.BookingNotFoundException;
import com.mahesh.ems.exception.EventPackageNotFoundException;
import com.mahesh.ems.exception.UserNotFoundException;
import com.mahesh.ems.mapper.BookingMapper;
import com.mahesh.ems.repository.BookingRepository;
import com.mahesh.ems.repository.EventPackageRepository;
import com.mahesh.ems.repository.UserRepository;
import com.mahesh.ems.service.interfaces.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final EventPackageRepository eventPackageRepository;
    private final BookingMapper bookingMapper;

    @Override
    public BookingResponse createBooking(
            BookingRequest request,
            Authentication authentication) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UserNotFoundException(
                                "User not found with email : " + email));

        EventPackage eventPackage = eventPackageRepository.findById(request.getPackageId())
                .orElseThrow(() ->
                        new EventPackageNotFoundException(
                                "Package not found with id : " + request.getPackageId()));

        if (request.getNumberOfMembers() > eventPackage.getMaxMembers()) {
            throw new BookingLimitExceededException(
                    "Maximum allowed members is " + eventPackage.getMaxMembers());
        }

        Booking booking = bookingMapper.toEntity(request);

        booking.setUser(user);
        booking.setEventPackage(eventPackage);
        booking.setStatus(BookingStatus.PENDING);

        Booking savedBooking = bookingRepository.save(booking);

        return bookingMapper.toResponse(savedBooking);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookingResponse> getAllBookings() {
        return bookingMapper.toResponseList(
                bookingRepository.findAll());
    }

    @Override
    @Transactional(readOnly = true)
    public BookingResponse getBookingById(Long id) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() ->
                        new BookingNotFoundException(
                                "Booking not found with id : " + id));

        return bookingMapper.toResponse(booking);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookingResponse> getMyBookings(Authentication authentication) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found"));

        return bookingMapper.toResponseList(
                bookingRepository.findByUserId(user.getId()));
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookingResponse> getBookingsByPackage(Long packageId) {

        return bookingMapper.toResponseList(
                bookingRepository.findByEventPackageId(packageId));
    }

    @Override
    public BookingResponse updateBooking(Long id, BookingRequest request) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() ->
                        new BookingNotFoundException(
                                "Booking not found with id : " + id));

        EventPackage eventPackage = eventPackageRepository.findById(request.getPackageId())
                .orElseThrow(() ->
                        new EventPackageNotFoundException(
                                "Package not found with id : " + request.getPackageId()));

        if (request.getNumberOfMembers() > eventPackage.getMaxMembers()) {
            throw new BookingLimitExceededException(
                    "Maximum allowed members is " + eventPackage.getMaxMembers());
        }

        booking.setNumberOfMembers(request.getNumberOfMembers());
        booking.setEventPackage(eventPackage);

        Booking updatedBooking = bookingRepository.save(booking);

        return bookingMapper.toResponse(updatedBooking);
    }

    @Override
    public void cancelBooking(Long id) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() ->
                        new BookingNotFoundException(
                                "Booking not found with id : " + id));

        booking.setStatus(BookingStatus.CANCELLED);

        bookingRepository.save(booking);
    }
}