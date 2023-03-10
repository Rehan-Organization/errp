package com.abs.errp.awardrequest;

import java.util.List;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.AwardRequest;

@Service
public class AwardRequestServiceImpl implements AwardRequestService {

	private AwardRequestRepository awardServiceRepository;

	public AwardRequestServiceImpl(AwardRequestRepository awardServiceRespository) {
		super();
		this.awardServiceRepository = awardServiceRespository;
	}

	@Override
	public List<AwardRequest> getAllAwardRequest() {

		return awardServiceRepository.findAll();
	}

	@Override
	public AwardRequest saveAwardRequest(AwardRequest awardRequest) {

		return awardServiceRepository.save(awardRequest);
	}

}
