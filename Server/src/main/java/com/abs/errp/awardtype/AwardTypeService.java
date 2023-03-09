package com.abs.errp.awardtype;

import java.util.List;

import com.abs.errp.entity.AwardType;
import com.abs.errp.user.ErrpUser;

public interface AwardTypeService {
	
	List<AwardType> getAllAwardTypes();
	List<ErrpUser> getAllUsers();
}
