package com.mahesh.ems.dto.request;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackageRequest {

    @NotBlank(message = "Package name is required")
    private String packageName;

    @NotNull(message = "Package price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Package price must be greater than 0")
    private BigDecimal packagePrice;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Maximum members is required")
    @Min(value = 1, message = "Maximum members must be at least 1")
    private Integer maxMembers;

    @NotNull(message = "Active status is required")
    private Boolean active;

    @NotNull(message = "Event ID is required")
    private Long eventId;
}