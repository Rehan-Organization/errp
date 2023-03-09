package com.abs.errp.achievement;

import java.util.List;


import com.abs.errp.entity.Achievement;

public interface AchievementService {
	
	List<Achievement> getAllAchievements();
	Achievement saveAchievement(Achievement achievement);
	List<Achievement> findPaginated(int pageNo,int pageSize);
	// edit 
	Achievement getAchievementById(int id);
	//update the achievement after click the update button 
	Achievement updateAchievement(int id, Achievement achievement);
	
	void deleteAchievement(int id);
}
