package com.abs.errp.feedback;

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
import org.springframework.web.bind.annotation.RestController;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

@RestController
@RequestMapping("/feedback/")
public class FeedbackController {
	private FeedbackService feedbackService;

	public FeedbackController(FeedbackService feedbackService) {
		super();
		this.feedbackService = feedbackService;
	}

	// Rest api for add feedback for reportees.

	@PostMapping("/saveFeedback")
	@PreAuthorize("hasRole('SUPERVISOR')")
	public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback) {
		return new ResponseEntity<Feedback>(feedbackService.saveFeedback(feedback),HttpStatus.CREATED);
	}

	// Rest API for fetching the list of all reportees for particular supervisor

	@GetMapping("/getReportees")
	@PreAuthorize("hasRole('SUPERVISOR')")
	public ResponseEntity<List<ErrpUser>> getAllUsers() {
		return ResponseEntity.ok(this.feedbackService.getAllUsers());
	}

	// Rest API for fetching the feedback by using the feedback id

	@GetMapping("/getFeedbacks/{isMyFeedback}/{pageNo}/{pageSize}")	
//	@PreAuthorize ("hasRole('SUPERVISOR')")
	public ResponseEntity<List<Feedback>> getAllFeedbacks(@PathVariable boolean isMyFeedback, @PathVariable int pageNo, @PathVariable int pageSize)
	{
		System.out.println("paginated called");
		return ResponseEntity.ok(this.feedbackService.getMyFeedbacks(isMyFeedback, pageNo, pageSize));
	}

	// Rest API to save the feedback using the feedback id

	@PutMapping("/saveFeedback/{id}")
	@PreAuthorize("hasRole('SUPERVISOR')")
	public ResponseEntity<Feedback> updateFeedbacks(@RequestBody Feedback feedback, @PathVariable int id) {
		return ResponseEntity.ok(this.feedbackService.updateFeedback(feedback, id));
	}

	// Rest API to delete the feedback using the feedback id

	@DeleteMapping("/removeFeedback/{id}")
	@PreAuthorize("hasRole('SUPERVISOR')")
	void removeFeedback(@PathVariable("id") int id) {
		this.feedbackService.removeByFeedbackId(id);
	}

	// Rest API to fetch the feedback using the feedback id

	@GetMapping("/getFeedback/{id}")
	@PreAuthorize("hasRole('SUPERVISOR')")
	Optional<Feedback> getFeedback(@PathVariable int id) {
		return this.feedbackService.getFeedback(id);
	}
}
