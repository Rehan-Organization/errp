package com.abs.errp.exception;

public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private String message;

	public ResourceNotFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}