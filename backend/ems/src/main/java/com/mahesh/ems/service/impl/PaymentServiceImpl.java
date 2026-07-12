package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.request.PaymentRequest;
import com.mahesh.ems.dto.response.PaymentResponse;
import com.mahesh.ems.entity.Booking;
import com.mahesh.ems.entity.Payment;
import com.mahesh.ems.enums.BookingStatus;
import com.mahesh.ems.enums.PaymentStatus;
import com.mahesh.ems.exception.BookingNotFoundException;
import com.mahesh.ems.exception.PaymentAlreadyExistsException;
import com.mahesh.ems.exception.PaymentNotFoundException;
import com.mahesh.ems.mapper.PaymentMapper;
import com.mahesh.ems.repository.BookingRepository;
import com.mahesh.ems.repository.PaymentRepository;
import com.mahesh.ems.service.interfaces.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class PaymentServiceImpl implements PaymentService {


    private final PaymentRepository paymentRepository;

    private final BookingRepository bookingRepository;

    private final PaymentMapper paymentMapper;

    @Override
    public PaymentResponse createPayment(PaymentRequest request) {


        Booking booking = bookingRepository.findById(request.getBookingId())
                .orElseThrow(() ->
                        new BookingNotFoundException(
                                "Booking not found with id : "
                                        + request.getBookingId()
                        ));


        if(paymentRepository.existsByBookingId(request.getBookingId())){

            throw new PaymentAlreadyExistsException(
                    "Payment already exists for this booking"
            );
        }


        Payment payment = new Payment();


        payment.setBooking(booking);


        payment.setTransactionId(
                "TXN-" + UUID.randomUUID()
        );


        payment.setAmount(
                booking.getEventPackage()
                        .getPackagePrice()
        );


        payment.setStatus(
                PaymentStatus.SUCCESS
        );


        payment.setPaymentDate(
                LocalDateTime.now()
        );


        Payment savedPayment =
                paymentRepository.save(payment);



        // Update booking after successful payment

        booking.setStatus(
                BookingStatus.CONFIRMED
        );


        bookingRepository.save(booking);



        return paymentMapper.toResponse(savedPayment);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentResponse> getAllPayments(){

        return paymentMapper.toResponseList(
                paymentRepository.findAll()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public PaymentResponse getPaymentById(Long id){

        Payment payment =
                paymentRepository.findById(id)
                        .orElseThrow(() ->
                                new PaymentNotFoundException(
                                        "Payment not found with id : "
                                                + id
                                ));

        return paymentMapper.toResponse(payment);
    }

    @Override
    @Transactional(readOnly = true)
    public PaymentResponse getPaymentByBooking(Long bookingId){


        Payment payment =
                paymentRepository.findByBookingId(bookingId)
                        .orElseThrow(() ->
                                new PaymentNotFoundException(
                                        "Payment not found for booking : "
                                                + bookingId
                                ));


        return paymentMapper.toResponse(payment);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentResponse> getPaymentsByStatus(String status){


        PaymentStatus paymentStatus =
                PaymentStatus.valueOf(status.toUpperCase());


        return paymentMapper.toResponseList(
                paymentRepository.findByStatus(paymentStatus)
        );
    }

    @Override
    public void refundPayment(Long id){


        Payment payment =
                paymentRepository.findById(id)
                        .orElseThrow(() ->
                                new PaymentNotFoundException(
                                        "Payment not found with id : "
                                                + id
                                ));


        payment.setStatus(
                PaymentStatus.REFUNDED
        );


        paymentRepository.save(payment);


    }


}