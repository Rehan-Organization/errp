package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.AwardType;
import com.abs.errp.user.ErrpUser;

@RestController
@RequestMapping("")
public class AwardTypeController {

	private AwardTypeService awardTypeService;

	public AwardTypeController(AwardTypeService awardTypeService) {
		super();
		this.awardTypeService = awardTypeService;
	}


}
