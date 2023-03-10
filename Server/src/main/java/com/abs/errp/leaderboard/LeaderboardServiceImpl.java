package com.abs.errp.leaderboard;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class LeaderboardServiceImpl implements LeaderboardService{
	@Autowired 
	private LeaderboardRepository leaderboardRepository;
	  
	public LeaderboardServiceImpl(LeaderboardRepository leaderboardRepository) {
		super();
		this.leaderboardRepository = leaderboardRepository;
	}

	
	@Override
	public List<Leaderboard> getTopPerformingEmployeeList(int pageNumber,int pageSize,Date startDate, Date endDate) {
		Pageable pages = PageRequest.of(pageNumber, pageSize);
		return leaderboardRepository.getTopEmployeeList(pages,startDate, endDate);
	}

	


}
