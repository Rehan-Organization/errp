package com.abs.errp.achievement;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abs.errp.entity.Achievement;

@RequestMapping("/achievement")
@RestController
public class AchievmentController {

	private AchievementService achievementService;

	public AchievmentController(AchievementService achievementService) {
		super();
		this.achievementService = achievementService;
	}

	@PostMapping()
	public ResponseEntity<Achievement> saveAchievement(@RequestBody Achievement achievement) {
		return new ResponseEntity<Achievement>(achievementService.saveAchievement(achievement), HttpStatus.CREATED);

	}

	@GetMapping("/paginated/{pageNo}/{pageSize}")
	public List<Achievement> getPaginatedCountries(@PathVariable int pageNo,
			@PathVariable int pageSize) {

		return achievementService.findPaginated(pageNo, pageSize);
	}

	@PutMapping()
	public ResponseEntity<Achievement> updateAchievement(@RequestBody Achievement achievement) {
		return new ResponseEntity<Achievement>(achievementService.updateAchievement(achievement),
				HttpStatus.OK);

	}

	@GetMapping("{id}")
	public ResponseEntity<Achievement> getAchievementById(@PathVariable("id") int id) {

		return new ResponseEntity<Achievement>(achievementService.getAchievementById(id), HttpStatus.OK);

	}

	@DeleteMapping("{id}")
	public void deleteAchievement(@PathVariable("id") int id) {
		achievementService.deleteAchievement(id);
	}

	@PostMapping("/submit")
	public void submitAchievement(@RequestBody Achievement achievement) {
		achievementService.submitAchievement(achievement);
	}

}
