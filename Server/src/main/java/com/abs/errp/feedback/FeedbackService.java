package com.abs.errp.feedback;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.abs.errp.entity.Feedback;

public interface FeedbackService {
		ResponseEntity<Feedback> saveFeedback(Feedback feedback);
}
