package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.awardtype.Exception.AwardNameAlreadyExistsException;
import com.abs.errp.entity.AwardType;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/awardTypes")
public class AwardTypeController {

	
   
	private AwardTypeService awardTypeServices;
	

	public AwardTypeController(AwardTypeService awardTypeServices) {
		super();
		this.awardTypeServices = awardTypeServices;
	}
	
	
	@GetMapping()
	public List<AwardType> getAllAwardTypes()
	{
		return awardTypeServices.getAllAwardTypes();
	}
	
	
	@PostMapping()
	public ResponseEntity<AwardType> saveAwardType(@RequestBody AwardType awardType) throws AwardNameAlreadyExistsException{
		
		return new ResponseEntity<AwardType>(awardTypeServices.saveAwardType(awardType),HttpStatus.CREATED);
		
	}
	
	


	@PutMapping("{awardId}")
	public ResponseEntity<AwardType> updateAwardType(@PathVariable long awardId,@RequestBody AwardType awardType){
		return new ResponseEntity<AwardType>(awardTypeServices.updateAwardType(awardId,awardType),HttpStatus.CREATED);
		
	}
	
	@GetMapping("{awardId}")
	public ResponseEntity<AwardType> getAwardTypeById(@PathVariable("awardId") long awardId){
		return new ResponseEntity<AwardType>(awardTypeServices.getAwardTypeById(awardId), HttpStatus.OK);
	
	}
	
	
	
}
