package com.abs.errp.leaderboard;

import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {
	
	private LeaderboardService leaderboardService;

	public LeaderboardController(LeaderboardService leaderboardService) {
		super();
		this.leaderboardService = leaderboardService;
	}
		
	

	@GetMapping("{pageNumber}/{pageSize}/{startDate}/{endDate}")
	public List<Leaderboard> getTopPermormingList(@PathVariable int pageNumber, @PathVariable int pageSize, @PathVariable Date startDate, @PathVariable Date endDate ){
		return leaderboardService.getTopPerformingEmployeeList(pageNumber,pageSize,startDate,endDate);
	}
}
