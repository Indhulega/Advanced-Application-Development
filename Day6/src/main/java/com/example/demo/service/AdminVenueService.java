package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AdminVenue;
import com.example.demo.repository.AdminVenueRepository;

@Service
public class AdminVenueService {

    @Autowired
    private AdminVenueRepository adminVenueRepository;

    public List<AdminVenue> getAllAdminVenues() {
        return adminVenueRepository.findAll();
    }

    public Optional<AdminVenue> getAdminVenueById(int id) {
        return adminVenueRepository.findById(id);
    }

    public AdminVenue saveAdminVenue(AdminVenue adminVenue) {
        return adminVenueRepository.save(adminVenue);
    }

    public AdminVenue updateAdminVenue(AdminVenue adminVenue) {
        return adminVenueRepository.save(adminVenue);
    }

    public void deleteAdminVenue(int id) {
        adminVenueRepository.deleteById(id);
    }
}
