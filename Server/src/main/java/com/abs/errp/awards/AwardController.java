package com.abs.errp.awards;


import org.springframework.web.bind.annotation.RestController;


@RestController
public class AwardController {
	
	public String home()
	{
		return "hello Awards";
	}

}
