package com.abs.errp.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class LoggedInUser extends User {
	static final long serialVersionUID = 1L;

	private Long employeeId;
	private String employeeName;
	
	public LoggedInUser(String username, String password, Long employeeId, String employeeName, Collection<? extends GrantedAuthority> authorities) {
		super(username, password, authorities);
		this.employeeName=employeeName;
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}
}
