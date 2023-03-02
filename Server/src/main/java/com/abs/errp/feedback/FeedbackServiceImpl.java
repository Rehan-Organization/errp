package com.abs.errp.feedback;

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
	
	private FeedbackRepository feedbackRepository;
//	private ErrpUserRepository errpUserRepository;
//	@Autowired
//	private LoggedInUserContext userContext;
//
//	
//	LoggedInUser user = this.userContext.getLoggedInUser();
	
	public FeedbackServiceImpl(FeedbackRepository feedbackRepository, ErrpUserRepository errpUserRepository) {
		super();
		this.feedbackRepository = feedbackRepository;
//		this.errpUserRepository = errpUserRepository;
	}

	@Override
	public ResponseEntity<Feedback> saveFeedback(Feedback feedback) {
		return new ResponseEntity<Feedback>(feedbackRepository.save(feedback),HttpStatus.CREATED);
	}

	

//	@Override
//	public List<ErrpUser> fetchAllUsers() {
//		return errpUserRepository.fetchAllUserBySupervisorId(user.getEmployeeId());
//	}
//	
	
	
	
}
