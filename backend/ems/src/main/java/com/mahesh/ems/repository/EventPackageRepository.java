package com.mahesh.ems.repository;

import com.mahesh.ems.entity.EventPackage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventPackageRepository extends JpaRepository<EventPackage, Long> {

    List<EventPackage> findByEventId(Long eventId);

    List<EventPackage> findByActiveTrue();

    List<EventPackage> findByEventIdAndActiveTrue(Long eventId);

    boolean existsByPackageNameAndEventId(String packageName, Long eventId);
}