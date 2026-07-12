package com.mahesh.ems.controller;

import com.mahesh.ems.dto.request.PackageRequest;
import com.mahesh.ems.dto.response.PackageResponse;
import com.mahesh.ems.service.interfaces.EventPackageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/packages")
@RequiredArgsConstructor
public class EventPackageController {

    private final EventPackageService eventPackageService;

    @PostMapping
    public ResponseEntity<PackageResponse> createPackage(
            @Valid @RequestBody PackageRequest request) {

        return new ResponseEntity<>(
                eventPackageService.createPackage(request),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<List<PackageResponse>> getAllPackages() {

        return ResponseEntity.ok(
                eventPackageService.getAllPackages()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<PackageResponse> getPackageById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                eventPackageService.getPackageById(id)
        );
    }

    @GetMapping("/event/{eventId}")
    public ResponseEntity<List<PackageResponse>> getPackagesByEvent(
            @PathVariable Long eventId) {

        return ResponseEntity.ok(
                eventPackageService.getPackagesByEvent(eventId)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<PackageResponse> updatePackage(
            @PathVariable Long id,
            @Valid @RequestBody PackageRequest request) {

        return ResponseEntity.ok(
                eventPackageService.updatePackage(id, request)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePackage(
            @PathVariable Long id) {

        eventPackageService.deletePackage(id);

        return ResponseEntity.ok("Package deleted successfully.");
    }
}