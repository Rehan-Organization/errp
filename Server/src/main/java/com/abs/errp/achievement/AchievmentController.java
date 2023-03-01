package com.abs.errp.achievement;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.Achievements;

@RestController
public class AchievmentController {
	
	
	private AchievementService achievementService;
	
	public AchievmentController() {
		
	}
	public AchievmentController(AchievementService achievementService) {
		super();
		this.achievementService = achievementService;
	}
	
	//get achievement API
	@GetMapping("/getAchievement")
	public List<Achievements> getAchievement(){
		return achievementService.getAllAchievements();
		
	}
	
}
