package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.AwardType;

@RestController
public class AwardTypeController {

	
   
	private AwardTypeService awardTypeServices;
	


	public AwardTypeController(AwardTypeService awardTypeServices) {
		super();
		this.awardTypeServices = awardTypeServices;
	}
	
	
	

	
	@GetMapping("/allAwardList")
	public List<AwardType> getAllAwardTypes()
	{
		return awardTypeServices.getAllAwardTypes();
	}
	
	
	@PostMapping("/newAwardType")
	public ResponseEntity<AwardType> saveAwardType(@RequestBody AwardType awardType) throws AwardNameAlreadyExitsException{
		
		String awardName = awardType.getAwardName();
		
		AwardType award = awardTypeServices.findAwardByName(awardName);
		

			if(award==null) {
				
				return new ResponseEntity<AwardType>(awardTypeServices.saveAwardType(awardType),HttpStatus.CREATED);
			
			}
			else{
				
				 return new ResponseEntity<AwardType>(HttpStatus.ALREADY_REPORTED);
				
			}
	
		
		
	}
	
	
	
}
