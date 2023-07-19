package com.kds.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kds.Models.Staff;
import com.kds.Repos.StaffRepo;

@Service

public class StaffService {
	
	@Autowired
	private StaffRepo stfr;
	
	public List<Staff> getAllStaffs(){
		return stfr.findAll();
	}
	
	public String SignUpx(Staff staffx) {
		String email = staffx.getEmail();
		Staff staffxAuth = stfr.findByEmail(email);
		if (staffxAuth == null) {
			stfr.save(staffx);
			return "Signup Successful !";
		} else {
			if (staffxAuth.getEmail().equals(email)) {
				return "Email ID Already Exists";
			} else {
				return "Invalid Email ID";
			}
		}
	}

}
