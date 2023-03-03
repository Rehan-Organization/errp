package com.abs.errp.awardtype;

public class AwardNameAlreadyExitsException extends RuntimeException{
	
	private String message;
	public AwardNameAlreadyExitsException() {}
	 
    public AwardNameAlreadyExitsException(String msg)
    {
        super(msg);
        this.message = msg;
    }
	

}
