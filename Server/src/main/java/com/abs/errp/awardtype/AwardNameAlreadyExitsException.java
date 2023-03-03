package com.abs.errp.awardtype;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//@ResponseStatus(HttpStatus.BAD_REQUEST, reason ="Some parameters are invalid")

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Some parameters are invalid")
public class AwardNameAlreadyExitsException extends RuntimeException{
	
	public AwardNameAlreadyExitsException(String message)
	{
		super(message);
	}
}
