package com.mahesh.ems.service.interfaces;

import com.mahesh.ems.dto.request.EventRequest;
import com.mahesh.ems.dto.response.EventResponse;

import java.util.List;

public interface EventService {

    EventResponse createEvent(EventRequest request);

    List<EventResponse> getAllEvents();

    EventResponse getEventById(Long id);

    List<EventResponse> getEventsByCategory(Long categoryId);

    EventResponse updateEvent(Long id, EventRequest request);

    void deleteEvent(Long id);

}