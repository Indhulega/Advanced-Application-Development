package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.AdminVenue;

public interface AdminVenueRepository extends JpaRepository<AdminVenue, Integer> {
}
