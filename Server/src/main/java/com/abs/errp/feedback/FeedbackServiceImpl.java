package com.abs.errp.feedback;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	private FeedbackRepository feedbackRepository;

	public FeedbackServiceImpl(FeedbackRepository feedbackRepository) {
		super();
		this.feedbackRepository = feedbackRepository;
	}

	@Override
	public ResponseEntity<Feedback> saveFeedback(Feedback feedback) {
		return new ResponseEntity<Feedback>(feedbackRepository.save(feedback),HttpStatus.CREATED);
	}
	
	public List<Feedback> fetchAll(){
		List<Feedback> list=feedbackRepository.findAll();
		return list;
	}
	
	
}
