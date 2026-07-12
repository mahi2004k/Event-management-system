package com.mahesh.ems.dto.response;

import com.mahesh.ems.enums.BookingStatus;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingResponse {

    private Long id;

    private Integer numberOfMembers;

    private BookingStatus status;

    private Long userId;

    private String userName;

    private String userEmail;

    private Long packageId;

    private String packageName;

    private Long eventId;

    private String eventTitle;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}