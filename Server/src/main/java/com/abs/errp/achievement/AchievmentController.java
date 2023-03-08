package com.abs.errp.achievement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.Achievement;

@CrossOrigin("*")
@RequestMapping("/achievement")
@RestController
public class AchievmentController {

	private AchievementService achievementService;

	public AchievmentController(AchievementService achievementService) {
		super();
		this.achievementService = achievementService;
	}

	// get achievement API
	@GetMapping("/emp")
	public List<Achievement> getAchievement() {
		return achievementService.getAllAchievements();

	}

	// post achievement API
	@PostMapping
	public ResponseEntity<Achievement> saveEmployee(@RequestBody Achievement achievement) {
		return new ResponseEntity<Achievement>(achievementService.saveAchievement(achievement), HttpStatus.CREATED);

	}
	
	@GetMapping("/{pageNo}/{pageSize}")
	public List<Achievement> getPaginatedCountries(@PathVariable int pageNo, 
	        @PathVariable int pageSize) {

	    return achievementService.findPaginated(pageNo, pageSize);
	}
}
