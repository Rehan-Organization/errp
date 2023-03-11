package com.abs.errp.leaderboard;
import java.util.Date;
import java.util.List;

public interface LeaderboardService {
	
	List<Leaderboard> getTopPerformingEmployeeList(int pageNumber,int pageSize,Date startDate, Date endDate);

}
