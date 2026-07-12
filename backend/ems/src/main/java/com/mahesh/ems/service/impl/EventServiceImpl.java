package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.request.EventRequest;
import com.mahesh.ems.dto.response.EventResponse;
import com.mahesh.ems.entity.Event;
import com.mahesh.ems.entity.EventCategory;
import com.mahesh.ems.exception.CategoryNotFoundException;
import com.mahesh.ems.exception.EventNotFoundException;
import com.mahesh.ems.mapper.EventMapper;
import com.mahesh.ems.repository.EventCategoryRepository;
import com.mahesh.ems.repository.EventRepository;
import com.mahesh.ems.service.interfaces.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    private final EventCategoryRepository categoryRepository;

    private final EventMapper eventMapper;

    @Override
    public EventResponse createEvent(EventRequest request) {

        EventCategory category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() ->
                        new CategoryNotFoundException(
                                "Category not found with id : " + request.getCategoryId()
                        ));

        Event event = eventMapper.toEntity(request);

        event.setCategory(category);

        Event savedEvent = eventRepository.save(event);

        return eventMapper.toResponse(savedEvent);
    }

    @Override
    public List<EventResponse> getAllEvents() {

        List<Event> events = eventRepository.findAll();

        return eventMapper.toResponseList(events);
    }

    @Override
    public EventResponse getEventById(Long id) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new EventNotFoundException(
                                "Event not found with id : " + id
                        ));

        return eventMapper.toResponse(event);
    }

    @Override
    public List<EventResponse> getEventsByCategory(Long categoryId) {

        categoryRepository.findById(categoryId)
                .orElseThrow(() ->
                        new CategoryNotFoundException(
                                "Category not found with id : " + categoryId
                        ));

        List<Event> events =
                eventRepository.findByCategoryId(categoryId);

        return eventMapper.toResponseList(events);
    }

    @Override
    public EventResponse updateEvent(Long id, EventRequest request) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new EventNotFoundException(
                                "Event not found with id : " + id
                        ));

        EventCategory category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() ->
                        new CategoryNotFoundException(
                                "Category not found with id : " + request.getCategoryId()
                        ));

        eventMapper.updateEntity(request, event);

        event.setCategory(category);

        Event updatedEvent = eventRepository.save(event);

        return eventMapper.toResponse(updatedEvent);
    }

    @Override
    public void deleteEvent(Long id) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new EventNotFoundException(
                                "Event not found with id : " + id
                        ));

        eventRepository.delete(event);
    }
}