package com.kds.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.kds.Models.Staff;
import com.kds.Services.StaffService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class StaffController {
	
	@Autowired
	private StaffService stfs ;
	
	@PostMapping("/addStaff")

	public String addStaff(@RequestBody Staff s)

	{

	return stfs.SignUpx(s);


	}
	
	@GetMapping ("/getallStaffs")

	public List<Staff>getStaffs()

	{

	return stfs.getAllStaffs();

	}

}
