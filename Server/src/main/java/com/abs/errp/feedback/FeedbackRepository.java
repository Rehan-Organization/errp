package com.abs.errp.feedback;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	List<Feedback> findBySenderId(ErrpUser user);

	List<Feedback> findByReceiverId(ErrpUser user);

	void deleteById(long id);

}
