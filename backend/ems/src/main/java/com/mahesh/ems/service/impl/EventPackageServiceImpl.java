package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.request.PackageRequest;
import com.mahesh.ems.dto.response.PackageResponse;
import com.mahesh.ems.entity.Event;
import com.mahesh.ems.entity.EventPackage;
import com.mahesh.ems.exception.EventNotFoundException;
import com.mahesh.ems.exception.EventPackageAlreadyExistsException;
import com.mahesh.ems.exception.EventPackageNotFoundException;
import com.mahesh.ems.mapper.PackageMapper;
import com.mahesh.ems.repository.EventPackageRepository;
import com.mahesh.ems.repository.EventRepository;
import com.mahesh.ems.service.interfaces.EventPackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class EventPackageServiceImpl implements EventPackageService {

    private final EventPackageRepository eventPackageRepository;
    private final EventRepository eventRepository;
    private final PackageMapper packageMapper;

    @Override
    public PackageResponse createPackage(PackageRequest request) {

        if (eventPackageRepository.existsByPackageNameAndEventId(
                request.getPackageName(),
                request.getEventId())) {

            throw new EventPackageAlreadyExistsException(
                    "Package already exists for this event.");
        }

        Event event = eventRepository.findById(request.getEventId())
                .orElseThrow(() ->
                        new EventNotFoundException("Event not found with id : "
                                + request.getEventId()));

        EventPackage eventPackage = packageMapper.toEntity(request);

        eventPackage.setEvent(event);

        EventPackage savedPackage = eventPackageRepository.save(eventPackage);

        return packageMapper.toResponse(savedPackage);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PackageResponse> getAllPackages() {

        return packageMapper.toResponseList(
                eventPackageRepository.findAll());
    }

    @Override
    @Transactional(readOnly = true)
    public PackageResponse getPackageById(Long id) {

        EventPackage eventPackage = eventPackageRepository.findById(id)
                .orElseThrow(() ->
                        new EventPackageNotFoundException(
                                "Package not found with id : " + id));

        return packageMapper.toResponse(eventPackage);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PackageResponse> getPackagesByEvent(Long eventId) {

        return packageMapper.toResponseList(
                eventPackageRepository.findByEventId(eventId));
    }

    @Override
    public PackageResponse updatePackage(Long id, PackageRequest request) {

        EventPackage eventPackage = eventPackageRepository.findById(id)
                .orElseThrow(() ->
                        new EventPackageNotFoundException(
                                "Package not found with id : " + id));

        Event event = eventRepository.findById(request.getEventId())
                .orElseThrow(() ->
                        new EventNotFoundException(
                                "Event not found with id : "
                                        + request.getEventId()));

        packageMapper.updateEntity(request, eventPackage);

        eventPackage.setEvent(event);

        EventPackage updatedPackage =
                eventPackageRepository.save(eventPackage);

        return packageMapper.toResponse(updatedPackage);
    }

    @Override
    public void deletePackage(Long id) {

        EventPackage eventPackage = eventPackageRepository.findById(id)
                .orElseThrow(() ->
                        new EventPackageNotFoundException(
                                "Package not found with id : " + id));

        eventPackageRepository.delete(eventPackage);
    }

}
