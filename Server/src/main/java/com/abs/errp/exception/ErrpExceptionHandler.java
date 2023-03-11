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
@ControllerAdvice
public class ErrpExceptionHandler {
	
	@ExceptionHandler(AuthenticationException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ResponseBody
    public void handleAuthenticationException(AuthenticationException ex)
    {
        //Since we want the Spring framework to handle this exception
        //we are throwing back the AuthenticationException at Spring
        throw ex;
    }
}