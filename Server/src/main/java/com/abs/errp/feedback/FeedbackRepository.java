package com.abs.errp.feedback;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.abs.errp.entity.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long>{
	List<Feedback> findBySenderId(long id);
	List<Feedback> findByReceiverId(long id);
	void deleteById(long id);

}
