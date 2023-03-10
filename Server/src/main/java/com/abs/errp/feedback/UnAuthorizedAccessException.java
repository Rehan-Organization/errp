package com.abs.errp.feedback;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UnAuthorizedAccessException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private String resourceName;
	
	public UnAuthorizedAccessException(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getResourceName() {
		return resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
}
