package com.abs.errp.awardtype;
import com.abs.errp.entity.AwardType;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abs.errp.security.LoggedInUserContext;
@Service 
public class AwardTypeServiceImplementation implements AwardTypeService{
   
	@Autowired
	LoggedInUserContext userContext;
	
	private  AwardTypeRepository awardServiceRespository;
	public AwardTypeServiceImplementation(AwardTypeRepository  awardServiceRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}


	@Override
	public List<AwardType> getAllAwardTypes() {
		return awardServiceRespository.findAll();
	         
		//return awardServiceRespository.findAll();
	}

	
	
	
	
	
}

	


