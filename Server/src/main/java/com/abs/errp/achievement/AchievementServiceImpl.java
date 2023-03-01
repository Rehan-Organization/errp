package com.abs.errp.achievement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.abs.errp.entity.Achievements;

public class AchievementServiceImpl implements AchievementService {
	
	
	@Autowired
	private AchievementRepository achievementRepository;
	
	@Override
	public List<Achievements> getAllAchievements() {
		// TODO Auto-generated method stub
		return achievementRepository.findAll();
	}
	
	

}
