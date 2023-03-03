package com.abs.errp.awards;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class AwardController {
	
	public String home()
	{
		return "hello Awards";
	}

}
