package com.mahesh.ems.dto.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackageResponse {

    private Long id;

    private String packageName;

    private BigDecimal packagePrice;

    private String description;

    private Integer maxMembers;

    private Boolean active;

    private Long eventId;

    private String eventTitle;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}