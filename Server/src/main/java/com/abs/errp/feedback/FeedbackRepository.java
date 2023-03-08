package com.abs.errp.feedback;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.abs.errp.entity.Feedback;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.user.ErrpUser;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long>{
	List<Feedback> findBySenderId(ErrpUser user);
	List<Feedback> findByReceiverId(ErrpUser user);
	void deleteById(long id);

}
