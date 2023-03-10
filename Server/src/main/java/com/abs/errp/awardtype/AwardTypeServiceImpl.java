package com.abs.errp.awardtype;
import com.abs.errp.entity.AwardType;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abs.errp.security.LoggedInUserContext;
import com.abs.errp.user.ErrpUser;
@Service 
public class AwardTypeServiceImpl implements AwardTypeService{
   
	@Autowired
	LoggedInUserContext userContext;
	
	@Autowired
	private  AwardTypeRepository awardServiceRespository;
	
	@Autowired
	private ErrpUserRepository userRepository;

	public AwardTypeServiceImpl(AwardTypeRepository  awardServiceRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}


	@Override
	public List<AwardType> getAllAwardTypes() {
		return awardServiceRespository.findAll();
	}


	@Override
	public List<ErrpUser> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	
	
	
	
	
}

	


