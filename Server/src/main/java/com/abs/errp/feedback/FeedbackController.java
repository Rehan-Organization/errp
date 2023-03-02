package com.abs.errp.feedback;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {
	private FeedbackService feedbackService;

	public FeedbackController(FeedbackService feedbackService) {
		super();
		this.feedbackService = feedbackService;
	}
	
//	@GetMapping("/fetchReportees")
//	public List<ErrpUser> fetchAllFeedbacks(){
//		return null://feedbackService.fetchAllUserBySupervisorId();
//	}
	
	@PostMapping()
	public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback){
		System.out.println(feedback.toString());
		return feedbackService.saveFeedback(feedback);
	}
	
//	@GetMapping()
//	public List<ErrpUser> fetchUsers(){
//		return feedbackService.fetchAllUsers();
//	}
	
	
}
