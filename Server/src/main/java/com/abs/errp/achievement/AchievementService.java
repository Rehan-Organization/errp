package com.abs.errp.achievement;

import java.util.List;

import com.abs.errp.entity.Achievement;

public interface AchievementService {

	Achievement saveAchievement(Achievement achievement);

	List<Achievement> findPaginated(int pageNo, int pageSize);
	
	List<Achievement> getAllAchievement();

	Achievement getAchievementById(int id);

	Achievement updateAchievement(Achievement achievement);

	void deleteAchievement(int id);

	void submitAchievement(Achievement achievement);
}
