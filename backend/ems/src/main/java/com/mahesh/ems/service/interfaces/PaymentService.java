package com.mahesh.ems.service.interfaces;


import com.mahesh.ems.dto.request.PaymentRequest;
import com.mahesh.ems.dto.response.PaymentResponse;

import java.util.List;

public interface PaymentService {

    PaymentResponse createPayment(PaymentRequest request);

    List<PaymentResponse> getAllPayments();

    PaymentResponse getPaymentById(Long id);

    PaymentResponse getPaymentByBooking(Long bookingId);

    List<PaymentResponse> getPaymentsByStatus(String status);

    void refundPayment(Long id);
}
