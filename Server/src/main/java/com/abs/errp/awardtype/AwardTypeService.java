package com.abs.errp.awardtype;

import java.util.List;

import com.abs.errp.entity.AwardType;

public interface AwardTypeService {
	
	List<AwardType> getAllAwardTypes();
	
	AwardType saveAwardType(AwardType awardType);
	
	AwardType findAwardByName(String awardName);
	
	AwardType getAwardTypeById(long id);
	
	AwardType updateAwardType(Long id,AwardType awardType);

}
