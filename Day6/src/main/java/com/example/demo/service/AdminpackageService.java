package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Adminpackage;
import com.example.demo.repository.AdminpackageRepository;

@Service
public class AdminpackageService {

    @Autowired
    private AdminpackageRepository adminPackageRepository;

    public List<Adminpackage> getAllAdminPackages() {
        return adminPackageRepository.findAll();
    }

    public Optional<Adminpackage> getAdminPackageById(int id) {
        return adminPackageRepository.findById(id);
    }

    public Adminpackage saveAdminPackage(Adminpackage adminPackage) {
        return adminPackageRepository.save(adminPackage);
    }

    public Adminpackage updateAdminPackage(Adminpackage adminPackage) {
        return adminPackageRepository.save(adminPackage);
    }

    public void deleteAdminPackage(int id) {
        adminPackageRepository.deleteById(id);
    }
}

