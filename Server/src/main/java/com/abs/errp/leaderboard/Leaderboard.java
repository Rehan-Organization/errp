package com.abs.errp.leaderboard;

public interface Leaderboard {
	
	Long getEmployeeId();
	String getEmployeeName();
	Long getSupervisorId();
	String getSupervisorName();
	int getAwardPoints();

}
