package com.abs.errp.awardtype.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class AwardTypeNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	private String awardType;
	private String fieldname;
	private Object value;
	
	public AwardTypeNotFoundException(String awardType, String fieldname, Object value) {
		super(String.format("%s is not found %s : '%s'", awardType,fieldname,value));
		this.awardType = awardType;
		this.fieldname = fieldname;
		this.value = value;
	}
	public String getResource() {
		return awardType;
	}
	public String getFieldname() {
		return fieldname;
	}
	public Object getValue() {
		return value;
	}


}
