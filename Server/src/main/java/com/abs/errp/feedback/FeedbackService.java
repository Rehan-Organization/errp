package com.abs.errp.feedback;

import java.util.List;
import java.util.Optional;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

public interface FeedbackService {
	Feedback saveFeedback(Feedback feedback);

	List<Feedback> getMyFeedbacks(boolean flag);

	List<ErrpUser> getAllUsers();

	void removeByFeedbackId(long id);

	Feedback updateFeedback(Feedback feedback, long id);

	Optional<Feedback> getFeedback(long id);
}
