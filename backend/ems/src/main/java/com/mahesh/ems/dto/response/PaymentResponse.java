package com.mahesh.ems.dto.response;

import com.mahesh.ems.enums.PaymentStatus;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentResponse {

    private Long id;

    private String transactionId;

    private BigDecimal amount;

    private PaymentStatus status;

    private LocalDateTime paymentDate;

    private Long bookingId;

    private Long userId;

    private String userName;

    private Long packageId;

    private String packageName;

    private Long eventId;

    private String eventTitle;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}