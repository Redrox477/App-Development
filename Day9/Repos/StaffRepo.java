package com.kds.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.Models.Staff;

public interface StaffRepo extends JpaRepository<Staff , Integer>{
	Staff findByEmail(String email);
}
