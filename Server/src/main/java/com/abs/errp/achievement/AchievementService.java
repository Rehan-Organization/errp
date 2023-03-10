package com.abs.errp.achievement;

import java.util.List;


import com.abs.errp.entity.Achievements;

public interface AchievementService {
	
	List<Achievements> getAllAchievements();
	Achievements saveAchievement(Achievements achievement);
}
