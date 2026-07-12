package com.mahesh.ems.service.interfaces;

import com.mahesh.ems.dto.request.PackageRequest;
import com.mahesh.ems.dto.response.PackageResponse;

import java.util.List;

public interface EventPackageService {

    PackageResponse createPackage(PackageRequest request);

    List<PackageResponse> getAllPackages();

    PackageResponse getPackageById(Long id);

    List<PackageResponse> getPackagesByEvent(Long eventId);

    PackageResponse updatePackage(Long id, PackageRequest request);

    void deletePackage(Long id);
}
