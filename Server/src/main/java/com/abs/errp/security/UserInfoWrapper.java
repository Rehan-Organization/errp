package com.abs.errp.security;

import java.util.Date;

import org.springframework.security.core.userdetails.User;

public class UserInfoWrapper {
	private String sessionId;
	private Date loginDate;
	private String userName;
	private String password;
	private User user;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Date getLoginDate() {
		return loginDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}

