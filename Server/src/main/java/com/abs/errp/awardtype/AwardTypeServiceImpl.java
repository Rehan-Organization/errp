package com.abs.errp.awardtype;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.abs.errp.awardtype.Exception.AwardNameAlreadyExistsException;
import com.abs.errp.awardtype.Exception.AwardTypeNotFoundException;

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
				throw new AwardNameAlreadyExistsException("Award name alredy exsists");
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
	public AwardType updateAwardType(Long id,AwardType awardType) {

		AwardType award = this.awardServiceRespository.getReferenceById(id);
		
		award.setAwardName(awardType.getAwardName());
		award.setAwardPoints(awardType.getAwardPoints());
		award.setAwardStatus(awardType.getAwardStatus());
		award.setCreatedDate(awardType.getCreatedDate());
		award.setLastUpdatedDate(awardType.getLastUpdatedDate());
		award.setDescription(awardType.getDescription());
		
		return awardServiceRespository.save(award);

	}


	@Override
	public AwardType getAwardTypeById(long id) {
		if(awardServiceRespository.findById(id).isPresent()) {
			return awardServiceRespository.findById(id).get();
		}
		else {
			
			throw new AwardTypeNotFoundException("AwardType","Id",id);
		}
	}
	
	
	



	

	



	
	

}
