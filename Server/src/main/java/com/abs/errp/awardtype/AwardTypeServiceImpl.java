package com.abs.errp.awardtype;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

        String awardName = awardType.getAwardName();
		Optional<AwardType> award = Optional.ofNullable(findAwardByName(awardName));
		
			if(award.isPresent()) {	
				
				throw new AwardNameAlreadyExitsException("Award name alredy exsists");
			}
			else{				
				return awardServiceRespository.save(awardType);
			}
		
		
	}


	@Override
	public AwardType findAwardByName(String awardName) {
		return awardServiceRespository.findByAwardName(awardName);
	}


	

	@Override
	public AwardType deactivateAwardType(Long id,AwardType awardType) {

		AwardType award = this.awardServiceRespository.getById(id);
		award.setAwardStatus(0);
		return awardServiceRespository.save(award);

	}
	
	
	




	



	
	

}
