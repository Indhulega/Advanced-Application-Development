package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.UserRegister;

public interface UserRepository extends JpaRepository<UserRegister, Long> {
}