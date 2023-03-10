package com.abs.errp.achievement;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.abs.errp.entity.Achievement;

public interface AchievementRepository extends PagingAndSortingRepository<Achievement, Integer>  {
	  List<Achievement> findByEmployeeId(int employeeId);

	List<Achievement> findAllByEmployeeId(int employeeId, Pageable paging);
}
