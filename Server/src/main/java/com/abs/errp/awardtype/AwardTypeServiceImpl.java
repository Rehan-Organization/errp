package com.abs.errp.awardtype;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abs.errp.awardtype.Exception.AwardNameAlreadyExistsException;
import com.abs.errp.awardtype.Exception.AwardTypeNotFoundException;


import com.abs.errp.entity.AwardType;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;


@Service
public class AwardTypeServiceImpl implements AwardTypeService {
	

	@Autowired
	LoggedInUserContext userContext;
	
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
		
		LoggedInUser user = this.userContext.getLoggedInUser();

        String awardName = awardType.getAwardName();
		Optional<AwardType> award = Optional.ofNullable(findAwardByName(awardName));
		
			if(award.isPresent()) {	
				throw new AwardNameAlreadyExistsException("Award name alredy exsists");
			}
			else{		
				
				awardType.setCreatedById(user.getEmployeeId());
				awardType.setUpdatedById(user.getEmployeeId());
				return awardServiceRespository.save(awardType);
			}
		
		
	}


	@Override
	public AwardType findAwardByName(String awardName) {
		return awardServiceRespository.findByAwardName(awardName);
	}


	

	@Override
	public AwardType updateAwardType(Long awardId,AwardType awardType) {

		LoggedInUser user = this.userContext.getLoggedInUser();
		AwardType award = this.awardServiceRespository.getReferenceById(awardId);
		
		award.setAwardName(awardType.getAwardName());
		award.setAwardPoints(awardType.getAwardPoints());
		award.setAwardStatus(awardType.getAwardStatus());
		award.setCreatedDate(awardType.getCreatedDate());
		award.setLastUpdatedDate(awardType.getLastUpdatedDate());
		award.setDescription(awardType.getDescription());
		awardType.setUpdatedById(user.getEmployeeId());
		
		return awardServiceRespository.save(award);

	}


	@Override
	public AwardType getAwardTypeById(long awardId) {
		if(awardServiceRespository.findById(awardId).isPresent()) {
			return awardServiceRespository.findById(awardId).get();
		}
		else {
			
			throw new AwardTypeNotFoundException("AwardType","Id",awardId);
		}
	}
	
	
	



	

	



	
	

}
