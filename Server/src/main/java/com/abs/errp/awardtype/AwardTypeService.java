package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.abs.errp.entity.AwardType;

public interface AwardTypeService {
	
	List<AwardType> getAllAwardTypes();
	AwardType saveAwardType(AwardType awardType);
	AwardType findAwardByName(String awardName);
	

}
