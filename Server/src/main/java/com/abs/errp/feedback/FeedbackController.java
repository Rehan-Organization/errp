package com.abs.errp.feedback;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;
import com.abs.errp.user.UserService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	private FeedbackService feedbackService;
	private UserService userService;

	

	public FeedbackController(FeedbackService feedbackService, UserService userService) {
		super();
		this.feedbackService = feedbackService;
		this.userService = userService;
	}

	@PostMapping()
	public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback) {
		feedback.setCreatedDate(new Date());
		feedback.setUpdatedDate(new Date());
		return new ResponseEntity<Feedback>(feedbackService.saveFeedback(feedback), HttpStatus.CREATED);
	}

	/**
	 * Rest API for fetching the list of all reportees for particular supervisor
	 * 
	 * @return
	 */
	@GetMapping("/getReportees")
	public ResponseEntity<List<ErrpUser>> getAllUsers() {
		return ResponseEntity.ok(this.userService.getAllReportees());
	}

	@GetMapping()
	public ResponseEntity<List<Feedback>> getAllFeedbacks(@RequestParam boolean isMyFeedback, @RequestParam int pageNo,
			@RequestParam int pageSize) {
		return ResponseEntity.ok(this.feedbackService.getMyFeedbacks(isMyFeedback, pageNo, pageSize));
	}

	@PutMapping("{id}")
	public ResponseEntity<Feedback> updateFeedbacks(@RequestBody Feedback feedback, @PathVariable int id) {
		return ResponseEntity.ok(this.feedbackService.updateFeedback(feedback, id));
	}

	@DeleteMapping("{id}")
	void removeFeedback(@PathVariable("id") int id) {
		this.feedbackService.removeByFeedbackId(id);
	}

	/**
	 * Rest API to fetch the feedback using the feedback id
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("{id}")
	Optional<Feedback> getFeedback(@PathVariable int id) {
		return this.feedbackService.getFeedback(id);
	}
}
