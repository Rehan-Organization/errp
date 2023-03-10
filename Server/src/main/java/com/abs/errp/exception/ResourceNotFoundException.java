package com.abs.errp.exception;

public class ResourceNotFoundException extends RuntimeException {

	private String achievement;
	private String fieldname;
	private Object value;

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
