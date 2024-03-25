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

import com.example.demo.entity.Adminpackage;
import com.example.demo.service.AdminpackageService;

@CrossOrigin("*")
@RequestMapping("/adminpackages")
@RestController
public class AdminpackageController {

    @Autowired
    private AdminpackageService adminPackageService;

    @GetMapping("/allpackage")
    public List<Adminpackage> getAllAdminPackages() {
        return adminPackageService.getAllAdminPackages();
    }

    @GetMapping("/{id}")
    public Adminpackage getAdminPackageById(@PathVariable int id) {
        return adminPackageService.getAdminPackageById(id)
                .orElseThrow(() -> new RuntimeException("Admin Package not found with id: " + id));
    }

    @PostMapping("/addpackage")
    public Adminpackage saveAdminPackage(@RequestBody Adminpackage adminPackage) {
        return adminPackageService.saveAdminPackage(adminPackage);
    }

    @PutMapping("/updatepackage")
    public Adminpackage updateAdminPackage(@RequestBody Adminpackage adminPackage) {
        return adminPackageService.updateAdminPackage(adminPackage);
    }

    @DeleteMapping("/deletepackage/{id}")
    public String deleteAdminPackage(@PathVariable int id) {
        adminPackageService.deleteAdminPackage(id);
        return "Admin Package deleted successfully with id: " + id;
    }
}
