package com.abs.errp.awardrequest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abs.errp.entity.AwardRequest;
import com.abs.errp.security.LoggedInUserContext;


@Service
public class AwardRequestServiceImpl implements AwardRequestService  {
	
	
	private  AwardRequestRepository awardServiceRespository;
	public AwardRequestServiceImpl(AwardRequestRepository  awardServiceRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}
	@Override
	public List<AwardRequest> getAllAwardRequest() {
		
		return awardServiceRespository.findAll();
	}
	

}
