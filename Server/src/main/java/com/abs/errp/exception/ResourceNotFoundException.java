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

	public ResourceNotFoundException(String achievement, String fieldname, Object value) {
		super(String.format("%s is not found %s : '%s'", achievement, fieldname, value));
		this.achievement = achievement;
		this.fieldname = fieldname;
		this.value = value;
	}

	public String getResource() {
		return achievement;
	}

	public String getFieldname() {
		return fieldname;
	}

	public Object getValue() {
		return value;
	}

}
