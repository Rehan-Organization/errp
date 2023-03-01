package com.abs.errp.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class LoggedInUserContext {

	public LoggedInUser getLoggedInUser() {
		return (LoggedInUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	}
}
