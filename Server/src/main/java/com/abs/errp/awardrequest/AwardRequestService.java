package com.abs.errp.awardrequest;
import java.util.List;

import org.springframework.stereotype.Service;

import com.abs.errp.entity.AwardRequest;

@Service
public interface AwardRequestService {
	
	List<AwardRequest> getAllAwardRequest();

	AwardRequest saveAwardRequest(AwardRequest awardRequest);
}
