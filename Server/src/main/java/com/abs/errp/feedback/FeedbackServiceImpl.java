package com.abs.errp.feedback;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.Feedback;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;
import com.abs.errp.user.ErrpUser;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	LoggedInUserContext userContext;

	private FeedbackRepository feedbackRepository;
	private ErrpUserRepository errpUserRepository;
	private boolean isSupervisor=false;

	public FeedbackServiceImpl(FeedbackRepository feedbackRepository, ErrpUserRepository errpUserRepository) {
		super();
		this.feedbackRepository = feedbackRepository;
		this.errpUserRepository = errpUserRepository;
	}

	@Override
	public Feedback saveFeedback(Feedback feedback) {
		ErrpUser e = setErrpUser();
		feedback.setSenderId(e);
		if(isSupervisor)
		return feedbackRepository.save(feedback);
		else
			return null;
	}

	@Override
	public List<ErrpUser> getAllUsers() {
		ErrpUser e = setErrpUser();
		if(errpUserRepository.findBySupervisor(e).size()>0) {
			isSupervisor=true;
		    return this.errpUserRepository.findBySupervisor(e);
		}
		else
			return null;
		
	}

	private ErrpUser setErrpUser() {
		LoggedInUser user = this.userContext.getLoggedInUser();
		ErrpUser e = new ErrpUser();
		e.setEmployeeId(user.getEmployeeId());
		return e;
	}

	@Override
	public List<Feedback> getMyFeedbacks(boolean isMyFeedback, int pageNo, int pageSize) {
		Sort sort=Sort.by("updatedDate").descending();
		ErrpUser errpUser = setErrpUser();
		Pageable pages = PageRequest.of(pageNo, pageSize,sort);
		Page<Feedback> feedbackData;		
		if(isMyFeedback)
		{
			return feedbackRepository.findAllByReceiverId(errpUser,pages);
		}
		else {
		    return feedbackRepository.findAllBySenderId(errpUser,pages);
		}
	}

	@Override
	public Feedback updateFeedback(Feedback feedback, int id) {
		Feedback updateFeedback = feedbackRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Feedback not exist with id: " + id));

		updateFeedback.setTitle(feedback.getTitle());
		updateFeedback.setDescription(feedback.getDescription());
		updateFeedback.setUpdatedDate(new Date());
		
		if(isSupervisor)
		return feedbackRepository.save(updateFeedback);
		return null;
	}

	@Override
	public void removeByFeedbackId(int id) {
		if(isSupervisor)
		this.feedbackRepository.deleteById(id);
		
	}

	@Override
	public Optional<Feedback> getFeedback(int id) {
		return feedbackRepository.findById(id);
	}

}
