package com.abs.errp.awardtype;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String resource;
	public String getResource() {
		return resource;
	}

	public String getFieldname() {
		return fieldname;
	}

	public Object getValue() {
		return value;
	}

	private String fieldname;
	private Object value;
	
	public ResourceNotFoundException(String resource, String fieldname, Object value) {
		super(String.format("%s is not found %s : '%s'", resource,fieldname,value));
		this.resource = resource;
		this.fieldname = fieldname;
		this.value = value;
	}

}
