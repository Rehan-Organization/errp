package com.abs.errp.awardtype;

import com.abs.errp.entity.AwardType;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abs.errp.security.LoggedInUserContext;
import com.abs.errp.user.ErrpUser;

@Service
public class AwardTypeServiceImpl implements AwardTypeService {

	

	@Autowired
	private AwardTypeRepository awardServiceRespository;

	

	public AwardTypeServiceImpl(AwardTypeRepository awardServiceRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}

	
	

}
