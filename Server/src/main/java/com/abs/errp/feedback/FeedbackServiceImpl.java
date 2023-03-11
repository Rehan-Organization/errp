package com.abs.errp.feedback;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.Feedback;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;
import com.abs.errp.user.ErrpUser;
import com.abs.errp.user.UserRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	LoggedInUserContext userContext;

	private FeedbackRepository feedbackRepository;
	private UserRepository errpUserRepository;

	public FeedbackServiceImpl(FeedbackRepository feedbackRepository, UserRepository errpUserRepository) {
		super();
		this.feedbackRepository = feedbackRepository;
		this.errpUserRepository = errpUserRepository;
	}


	private ErrpUser setErrpUser() {
		LoggedInUser user = this.userContext.getLoggedInUser();
		ErrpUser e = new ErrpUser();
		e.setEmployeeId(user.getEmployeeId());
		return e;
	}
	
	private LoggedInUser getUser() {
		return this.userContext.getLoggedInUser();
		
	}

	@Override
	public Feedback saveFeedback(Feedback feedback) {
		ErrpUser e = setErrpUser();
		feedback.setSenderId(e);
		long receiverId=feedback.getReceiverId().getEmployeeId();
		Optional<ErrpUser> receiver= errpUserRepository.findById(receiverId);
		if (receiver.get().getSupervisor().getEmployeeId()==getUser().getEmployeeId())
			return feedbackRepository.save(feedback);
		else
			throw new UnAuthorizedAccessException("User is not Authorized");
	
	}

	/**
	 * If user have reportees then user is supervisor
	 */
	

	/**
	 * If isMyFeedback is true then returns feedback received by user If
	 * isMyFeedback is false then returns feedback sent by supervisor to associated
	 * reportees
	 */
	@Override
	public List<Feedback> getMyFeedbacks(boolean isMyFeedback, int pageNo, int pageSize) {
		Sort sort = Sort.by("updatedDate").descending();
		Pageable pages = PageRequest.of(pageNo, pageSize, sort);

		ErrpUser errpUser = setErrpUser();

		if (isMyFeedback) {
			return feedbackRepository.findAllByReceiverId(errpUser, pages);
		} else {			
				return feedbackRepository.findAllBySenderId(errpUser, pages);
//			else
//				throw new UnAuthorizedAccessException("User is not Authorized");
		}
	}

	/**
	 * If respective employee is still reportee of current user then update record
	 * otherwise raise UnAuthorizedAccessException
	 */
	@Override
	public Feedback updateFeedback(Feedback feedback, int id) {
		Feedback updateFeedback = feedbackRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Feedback not exist with id: " + id));
		
		int receiverId=feedback.getReceiverId().getEmployeeId();
		Optional<ErrpUser> receiver= errpUserRepository.findById(receiverId);
		if (receiver.get().getSupervisor().getEmployeeId()==getUser().getEmployeeId()) {
			updateFeedback.setTitle(feedback.getTitle());
			updateFeedback.setDescription(feedback.getDescription());
			updateFeedback.setUpdatedDate(new Date());
			return feedbackRepository.save(updateFeedback);
		} else {
			throw new UnAuthorizedAccessException("User is not Authorized");
		}
	}

	/**
	 * If respective employee is still reportee of current user then delete record
	 * otherwise raise UnAuthorizedAccessException
	 */
	@Override
	public void removeByFeedbackId(int id) {
		if (feedbackRepository.findById(id).isPresent()) {		
			Optional<Feedback> feedback=this.feedbackRepository.findById(id);
			int receiverId=feedback.get().getReceiverId().getEmployeeId();
			Optional<ErrpUser> receiver= errpUserRepository.findById(receiverId);
			if(receiver.get().getSupervisor().getEmployeeId()==getUser().getEmployeeId())
				this.feedbackRepository.deleteById(id);
			else
				throw new UnAuthorizedAccessException("User is not Authorized");

		} else {
			throw new ResourceNotFoundException("Feedback not exist with id: " + id);
		}
	}

	@Override
	public Optional<Feedback> getFeedback(int id) {
		
		if (feedbackRepository.findById(id).isPresent()) {
			return feedbackRepository.findById(id);
		} else {
			throw new ResourceNotFoundException("Feedback not exist with id: " + id);
		}
	}

}
