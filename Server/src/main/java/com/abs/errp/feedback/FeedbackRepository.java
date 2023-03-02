package com.abs.errp.feedback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abs.errp.entity.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long>{
	
}
