package com.mahesh.ems.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
public class EventResponse {

    private Long id;

    private String title;

    private String description;

    private String venue;

    private BigDecimal price;

    private LocalDate eventDate;

    private LocalTime eventTime;

    private Integer capacity;

    private String imageUrl;

    private Boolean active;

    private Long categoryId;

    private String categoryName;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}