package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.AwardType;

@RestController
public class AwardTypeController {

	
   
	private AwardTypeService awardTypeServices;
	


	public AwardTypeController(AwardTypeService awardTypeServices) {
		super();
		this.awardTypeServices = awardTypeServices;
	}
	
	
	

	
	@GetMapping("/getAllAwardTypes")
	public List<AwardType> getAllAwardTypes()
	{
		return awardTypeServices.getAllAwardTypes();
	}
	
	
	@PostMapping("/saveAwardTypes")
	public ResponseEntity<AwardType> saveAwardType(@RequestBody AwardType awardType){
		return new ResponseEntity<AwardType>(awardTypeServices.saveAwardType(awardType),HttpStatus.CREATED);
		
	}
	
}
