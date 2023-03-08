package com.abs.errp.awardtype.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Some parameters are invalid")
public class AwardNameAlreadyExistsException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public AwardNameAlreadyExistsException(String message)
	{
		super(message);
	}

}
