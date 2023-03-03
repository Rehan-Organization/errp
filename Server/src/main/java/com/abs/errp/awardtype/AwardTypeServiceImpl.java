package com.abs.errp.awardtype;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;

import com.abs.errp.entity.AwardType;


@Service
public class AwardTypeServiceImpl implements AwardTypeService {
	

	private  AwardTypeRepository awardServiceRespository;
	
	public AwardTypeServiceImpl(AwardTypeRepository awardServicesRespository) {
		super();
		this.awardServiceRespository = awardServicesRespository;
	}
	
	
	@Override
	public List<AwardType> getAllAwardTypes() {
		
		return awardServiceRespository.findAll();
		
	}


	@Override
	public AwardType saveAwardType(AwardType awardType) {
		return awardServiceRespository.save(awardType);
		
	}


	@Override
	public AwardType findAwardByName(String awardName) {
		return awardServiceRespository.findByAwardName(awardName);
	}


	


	




	



	
	

}
