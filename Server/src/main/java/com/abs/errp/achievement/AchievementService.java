package com.abs.errp.achievement;

import java.util.List;

import com.abs.errp.entity.Achievement;

public interface AchievementService {

	List<Achievement> getAllAchievements();

	Achievement saveAchievement(Achievement achievement);

	List<Achievement> findPaginated(int pageNo, int pageSize);

	Achievement getAchievementById(int id);

	Achievement updateAchievement(int id, Achievement achievement);

	void deleteAchievement(int id);

	void submitAchievement(Achievement achievement);
}
