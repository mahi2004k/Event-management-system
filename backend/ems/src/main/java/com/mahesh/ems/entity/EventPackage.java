package com.mahesh.ems.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "event_packages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventPackage extends BaseEntity {

    @Column(nullable = false)
    private String packageName;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal packagePrice;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private Integer maxMembers;

    @Column(nullable = false)
    private Boolean active;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;
}