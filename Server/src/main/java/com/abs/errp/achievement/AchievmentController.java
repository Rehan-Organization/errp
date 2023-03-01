package com.abs.errp.achievement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.Achievements;

@RequestMapping("/achievement")
@RestController
public class AchievmentController {
	
	
	private AchievementService achievementService;
	
	
	public AchievmentController(AchievementService achievementService) {
		super();
		this.achievementService = achievementService;
	}
	
	//get achievement API
	@GetMapping
	public List<Achievements> getAchievement(){
		return achievementService.getAllAchievements();
		
	}
	
	//post achievement API
	@PostMapping
	public ResponseEntity<Achievements> saveEmployee(@RequestBody Achievements achievement){
	return new ResponseEntity<Achievements>(achievementService.saveAchievement(achievement), HttpStatus.CREATED);
	
	
}
}

