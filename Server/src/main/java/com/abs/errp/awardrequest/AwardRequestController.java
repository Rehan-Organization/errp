package com.abs.errp.awardrequest;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.AwardRequest;

@RestController
@RequestMapping("/awardrequest")
public class AwardRequestController {
   
	@Autowired
	private AwardRequestService awardRequestService;
	 
	 public AwardRequestController(AwardRequestService awardRequestService) {
			super();
			 System.out.println("2");
			this.awardRequestService = awardRequestService;
		}

	@GetMapping()
	public List<AwardRequest> getAllAwardRequest()
	
	{	
		System.out.println("AwardRequest");
		return awardRequestService.getAllAwardRequest();
	}

}
