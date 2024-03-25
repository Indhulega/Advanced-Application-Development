package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.AdminVenue;
import com.example.demo.service.AdminVenueService;

@CrossOrigin("*")
@RequestMapping("/adminvenues")
@RestController
public class AdminVenueController {

    @Autowired
    private AdminVenueService adminVenueService;

    @GetMapping("/allvenue")
    public List<AdminVenue> getAllAdminVenues() {
        return adminVenueService.getAllAdminVenues();
    }

    @GetMapping("/{id}")
    public AdminVenue getAdminVenueById(@PathVariable int id) {
        return adminVenueService.getAdminVenueById(id)
                .orElseThrow(() -> new RuntimeException("Admin Venue not found with id: " + id));
    }

    @PostMapping("/addvenue")
    public AdminVenue saveAdminVenue(@RequestBody AdminVenue adminVenue) {
        return adminVenueService.saveAdminVenue(adminVenue);
    }

    @PutMapping("/updatevenue")
    public AdminVenue updateAdminVenue(@RequestBody AdminVenue adminVenue) {
        return adminVenueService.updateAdminVenue(adminVenue);
    }

    @DeleteMapping("/deletevenue/{id}")
    public String deleteAdminVenue(@PathVariable int id) {
        adminVenueService.deleteAdminVenue(id);
        return "Admin Venue deleted successfully with id: " + id;
    }
}
