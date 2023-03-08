package com.abs.errp.achievement;

import java.util.List;


import com.abs.errp.entity.Achievement;

public interface AchievementService {
	
	List<Achievement> getAllAchievements(long id);
	Achievement saveAchievement(Achievement achievement);
	List<Achievement> findPaginated(int pageNo,int pageSize);
	void deleteAchievement(long id);
}
