package com.abs.errp.feedback;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

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
		ErrpUser e = setErrpUser();
		feedback.setSenderId(e);
		return new ResponseEntity<Feedback>(feedbackRepository.save(feedback),HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<List<ErrpUser>> fetchAllUsers() {
		ErrpUser e = setErrpUser();
		List<ErrpUser> userData = errpUserRepository.findBySupervisor(e);
		return ResponseEntity.ok(userData);
	}

	private ErrpUser setErrpUser() {
		LoggedInUser user = this.userContext.getLoggedInUser();
		ErrpUser e=new ErrpUser();
		e.setEmployeeId(user.getEmployeeId());
		return e;
	}

	@Override
	public ResponseEntity<List<Feedback>> fetchMyFeedbacks(boolean isMyFeedback) {
		ErrpUser errpUser = setErrpUser();
		List<Feedback> feedbackData = null;
		if(isMyFeedback)
		{
		    feedbackData = feedbackRepository.findBySenderId(errpUser);
		    Collections.reverse(feedbackData);
		}
		else {
			
			feedbackData = feedbackRepository.findByReceiverId(errpUser);
			 Collections.reverse(feedbackData);
		}

		return ResponseEntity.ok(feedbackData);
	}

	@Override
	public ResponseEntity<Feedback> modifyFeedback(Feedback feedback, long id) {
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

	@Override
	public Optional<Feedback> fetchFeedback(long id) {
		return feedbackRepository.findById(id);
	}

}
