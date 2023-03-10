package com.abs.errp.awardrequest;

import java.util.List;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.AwardRequest;

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
