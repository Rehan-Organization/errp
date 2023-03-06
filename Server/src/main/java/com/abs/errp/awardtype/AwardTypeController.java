package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.awardtype.Exception.AwardNameAlreadyExistsException;
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
	public ResponseEntity<AwardType> saveAwardType(@RequestBody AwardType awardType) throws AwardNameAlreadyExistsException{
		
		return new ResponseEntity<AwardType>(awardTypeServices.saveAwardType(awardType),HttpStatus.CREATED);
		
	}
	
	


	@PutMapping("/updateAwardType/{id}")
	public ResponseEntity<AwardType> updateAwardType(@PathVariable long id,@RequestBody AwardType awardType){
		return new ResponseEntity<AwardType>(awardTypeServices.updateAwardType(id,awardType),HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getAwardType/{id}")
	public ResponseEntity<AwardType> getAwardTypeById(@PathVariable("id") long id){
		return new ResponseEntity<AwardType>(awardTypeServices.getAwardTypeById(id), HttpStatus.OK);
	
	}
	
	
	
}
