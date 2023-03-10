package com.abs.errp.feedback;

import java.util.List;
import java.util.Optional;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

public interface FeedbackService {

	Feedback saveFeedback(Feedback feedback);

	List<ErrpUser> getAllReportees();

	List<Feedback> getMyFeedbacks(boolean isMyFeedback, int pageNo, int pageSize);

	Feedback updateFeedback(Feedback feedback, int id);

	void removeByFeedbackId(int id);

	Optional<Feedback> getFeedback(int id);
}
