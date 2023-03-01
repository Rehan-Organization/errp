package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.AwardType;


@RestController
public class AwardTypeController {

	
   
	AwardTypeService awardTypeServices;
	
	public AwardTypeController()
	{
		
	}

	public AwardTypeController(AwardTypeService awardTypeServices) {
		super();
		this.awardTypeServices = awardTypeServices;
	}
	
	
	
	
	//APIs for awardtype
	
	//get all award types
	@GetMapping("/getAllAwards")
	public List<AwardType> getAllAwardTypes()
	{
		return awardTypeServices.getAllAwardTypes();
	}
	
	
}
