package com.abs.errp.achievement;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.abs.errp.entity.Achievement;

public interface AchievementRepository extends PagingAndSortingRepository<Achievement, Long>  {
	
	List<Achievement> findByEmployeeId(int id);

}
