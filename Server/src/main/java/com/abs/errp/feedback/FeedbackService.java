package com.abs.errp.feedback;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

public interface FeedbackService {
		ResponseEntity<Feedback> saveFeedback(Feedback feedback);
		ResponseEntity<List<Feedback>> fetchMyFeedbacks(boolean flag);
		ResponseEntity<List<ErrpUser>> fetchAllUsers();
		void deleteByFeedbackId(long id);
		ResponseEntity<Feedback> modifyFeedback(Feedback feedback, long id);
		Optional<Feedback> fetchFeedback(long id);
}
