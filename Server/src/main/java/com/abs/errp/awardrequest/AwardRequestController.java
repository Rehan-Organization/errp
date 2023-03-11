package com.abs.errp.awardrequest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.AwardRequest;

@RestController
@RequestMapping("/awardrequest")
public class AwardRequestController {

	@Autowired
	private AwardRequestService awardRequestService;

	

}
