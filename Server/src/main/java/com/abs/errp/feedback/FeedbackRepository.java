package com.abs.errp.feedback;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.abs.errp.entity.Feedback;
import com.abs.errp.user.ErrpUser;

@Repository
public interface FeedbackRepository extends PagingAndSortingRepository<Feedback, Integer> {
	List<Feedback> findAllBySenderId(ErrpUser user, Pageable pageable);

	List<Feedback> findAllByReceiverId(ErrpUser user, Pageable pageable);

	void deleteById(long id);

}
