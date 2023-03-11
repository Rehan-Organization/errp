package com.abs.errp.leaderboard;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/leaderboard")
public class LeaderboardController {
	
	private LeaderboardService leaderboardService;

	public LeaderboardController(LeaderboardService leaderboardService) {
		super();
		this.leaderboardService = leaderboardService;
	}
		
	

	@GetMapping()
	public List<Leaderboard> getTopPermormingList(@RequestParam("pageNumber") int pageNumber, @RequestParam("pageSize") int pageSize, @RequestParam("startDate") @DateTimeFormat(pattern="yyyy-MM-dd") Date startDate, @RequestParam("endDate") @DateTimeFormat(pattern="yyyy-MM-dd") Date endDate ){
		return leaderboardService.getTopPerformingEmployeeList(pageNumber,pageSize,startDate,endDate);
	}
}
