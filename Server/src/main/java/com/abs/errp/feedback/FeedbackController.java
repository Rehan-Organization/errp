package com.abs.errp.feedback;

import java.util.List;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api/v1/")
public class FeedbackController {
	private FeedbackService feedbackService;

	public FeedbackController(FeedbackService feedbackService) {
		super();
		this.feedbackService = feedbackService;
	}
	
	@PostMapping("/saveFeedback")
	public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback){
		System.out.println(feedback.toString());
		return feedbackService.saveFeedback(feedback);
	}
	
	@GetMapping("/getReportees")
	public ResponseEntity<List<ErrpUser>> fetchAllUsers()
	{
		return this.feedbackService.fetchAllUsers();
	}
	
	@GetMapping("/getFeedbacks/{isMyFeedback}")
	public ResponseEntity<List<Feedback>> fetchAllFeedbacks(@PathVariable long isMyFeedback)
	{
		return this.feedbackService.fetchMyFeedbacks(isMyFeedback);
	}
	
	@PutMapping("/saveFeedback/{id}")
	public ResponseEntity<Feedback> updateFeedbacks(@RequestBody Feedback feedback, @PathVariable long id)
	{
		ResponseEntity<Feedback> updatedFeedback = this.feedbackService.modifyFeedbacks(feedback, id);
		return updatedFeedback;
	}
	
	@DeleteMapping("/removeFeedback/{id}")
	   void deleteFeedback(@PathVariable("id") Long id) {
	   this.feedbackService.deleteByFeedbackId(id);
	}
}
