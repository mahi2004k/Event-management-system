package com.mahesh.ems.controller;

import com.mahesh.ems.dto.request.PaymentRequest;
import com.mahesh.ems.dto.response.PaymentResponse;
import com.mahesh.ems.service.interfaces.PaymentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
public class PaymentController {


    private final PaymentService paymentService;


    @PostMapping
    public ResponseEntity<PaymentResponse> createPayment(
            @Valid @RequestBody PaymentRequest request) {


        return new ResponseEntity<>(
                paymentService.createPayment(request),
                HttpStatus.CREATED
        );
    }



    @GetMapping
    public ResponseEntity<List<PaymentResponse>> getAllPayments(){


        return ResponseEntity.ok(
                paymentService.getAllPayments()
        );
    }



    @GetMapping("/{id}")
    public ResponseEntity<PaymentResponse> getPaymentById(
            @PathVariable Long id){


        return ResponseEntity.ok(
                paymentService.getPaymentById(id)
        );
    }



    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<PaymentResponse> getPaymentByBooking(
            @PathVariable Long bookingId){


        return ResponseEntity.ok(
                paymentService.getPaymentByBooking(bookingId)
        );
    }



    @GetMapping("/status/{status}")
    public ResponseEntity<List<PaymentResponse>> getPaymentsByStatus(
            @PathVariable String status){


        return ResponseEntity.ok(
                paymentService.getPaymentsByStatus(status)
        );
    }



    @PatchMapping("/{id}/refund")
    public ResponseEntity<String> refundPayment(
            @PathVariable Long id){


        paymentService.refundPayment(id);


        return ResponseEntity.ok(
                "Payment refunded successfully."
        );
    }

}