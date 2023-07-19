package com.kds.Models;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity

@Table(name="StaffDetails")

public class Staff {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(name="StaffId")

	private int id;

	@Column(name="Role")

	private String role;

	@Column(name="Name")

	private String name ;

	@Column(name="Email")

	private String email;

	@Column(name="password")

	private String pwd;
	
	Staff(){};
	
	public Staff(int id ,String role , String name , String email ,String pwd) {
		super();
		this.id = id ;
		this.role = role ;
		this.name = name ;
		this.email = email ;
		this.pwd = pwd ;
		
	}
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	

}
