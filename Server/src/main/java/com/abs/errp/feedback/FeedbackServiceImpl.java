package com.abs.errp.feedback;

import java.util.Date;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	private FeedbackRepository feedbackRepository;

	private ErrpUserRepository errpUserRepository;

	public FeedbackServiceImpl(FeedbackRepository feedbackRepository,ErrpUserRepository errpUserRepository) {
		super();
		this.feedbackRepository = feedbackRepository;
		this.errpUserRepository = errpUserRepository;

	}

	@Override
	public ResponseEntity<Feedback> saveFeedback(Feedback feedback) {
		feedback.setCreatedDate(new Date());
		feedback.setLastUpdatedDate(new Date());
//		feedback.setSenderId(0); 
		return new ResponseEntity<Feedback>(feedbackRepository.save(feedback),HttpStatus.CREATED);
	}


	@Override
	public List<ErrpUser> fetchAllUsers() {
		ErrpUser e=new ErrpUser();
		long id=0;
		e.setEmployeeId(id);
		return errpUserRepository.findBySupervisor(e);
	}

	@Override
	public List<Feedback> fetchAllFeedbacks() {
		return feedbackRepository.findAll();
	}


}
