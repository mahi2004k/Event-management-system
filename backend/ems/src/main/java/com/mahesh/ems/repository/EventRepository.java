package com.mahesh.ems.repository;

import com.mahesh.ems.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    List<Event> findByCategoryId(Long categoryId);

    List<Event> findByActiveTrue();

    List<Event> findByCategoryIdAndActiveTrue(Long categoryId);

}