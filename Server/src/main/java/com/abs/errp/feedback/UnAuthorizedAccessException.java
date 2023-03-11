package com.abs.errp.feedback;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UnAuthorizedAccessException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private String exceptionMesssage;
	
	public UnAuthorizedAccessException(String exceptionMesssage) {
		this.exceptionMesssage = exceptionMesssage;
	}

	public String getExceptionMesssage() {
		return exceptionMesssage;
	}

	public void setExceptionMesssage(String exceptionMesssage) {
		this.exceptionMesssage = exceptionMesssage;
	}

}
