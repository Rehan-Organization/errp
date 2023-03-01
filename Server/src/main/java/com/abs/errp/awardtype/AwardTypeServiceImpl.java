package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.abs.errp.entity.AwardType;

public class AwardTypeServiceImpl implements AwardTypeService {
	

	@Autowired
	private  AwardTypeRepository awardServiceRespository;
	
	public AwardTypeServiceImpl(AwardTypeRepository awardServicesRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}
	
	

 
	@Override
	public List<AwardType> getAllAwardTypes() {
		
		return awardServiceRespository.findAll();
		
	}

}
