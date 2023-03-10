package com.abs.errp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * ErrpExceptionHandler
 *
 * This class will handle exceptions thrown from Controller classes
 *
 * @author rnawab
 *
 */
@ResponseStatus(value=HttpStatus.NOT_FOUND)
@ControllerAdvice
public class ErrpExceptionHandler extends RuntimeException   {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	} 
	




