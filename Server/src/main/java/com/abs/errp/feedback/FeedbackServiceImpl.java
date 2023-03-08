package com.abs.errp.feedback;

import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.Feedback;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;
import com.abs.errp.user.ErrpUser;

@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
	LoggedInUserContext userContext;
	
	private FeedbackRepository feedbackRepository;
	private ErrpUserRepository errpUserRepository;

	public FeedbackServiceImpl(FeedbackRepository feedbackRepository,ErrpUserRepository errpUserRepository) {
		super();
		this.feedbackRepository = feedbackRepository;
		this.errpUserRepository = errpUserRepository;
	}

	@Override
	public ResponseEntity<Feedback> saveFeedback(Feedback feedback) {
		return new ResponseEntity<Feedback>(feedbackRepository.save(feedback),HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<List<ErrpUser>> fetchAllUsers() {
		LoggedInUser user = this.userContext.getLoggedInUser();
		ErrpUser e=new ErrpUser();
		e.setEmployeeId(user.getEmployeeId());
		List<ErrpUser> userData = errpUserRepository.findBySupervisor(e);
		return ResponseEntity.ok(userData);
	}

	@Override
	public ResponseEntity<List<Feedback>> fetchMyFeedbacks(boolean isMyFeedback) {
		LoggedInUser user = this.userContext.getLoggedInUser();
		ErrpUser errpUser = new ErrpUser();
		errpUser.setEmployeeId(user.getEmployeeId());
		List<Feedback> feedbackData = null;
		if(isMyFeedback)
		{
		    feedbackData = feedbackRepository.findBySenderId(errpUser);
		}
		else {
			
			feedbackData = feedbackRepository.findByReceiverId(errpUser);
		}
		return ResponseEntity.ok(feedbackData);
	}

	@Override
	public ResponseEntity<Feedback> modifyFeedbacks(Feedback feedback, long id) {
		Feedback updateFeedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback not exist with id: " + id));

		updateFeedback.setTitle(feedback.getTitle());
		updateFeedback.setDescription(feedback.getDescription());
		updateFeedback.setLastUpdatedDate(feedback.getLastUpdatedDate());

		feedbackRepository.save(updateFeedback);

        return ResponseEntity.ok(updateFeedback);
	}

	@Override
	public void deleteByFeedbackId(long id) {
		feedbackRepository.deleteById(id);
	}

}
