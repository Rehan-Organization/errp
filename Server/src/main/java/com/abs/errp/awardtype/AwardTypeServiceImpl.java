package com.abs.errp.awardtype;

import java.util.List;
import org.springframework.stereotype.Service;

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

}
