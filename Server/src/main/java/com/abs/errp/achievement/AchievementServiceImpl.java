package com.abs.errp.achievement;

import java.util.List;

import org.springframework.stereotype.Service;

import com.abs.errp.entity.Achievements;

@Service
public class AchievementServiceImpl implements AchievementService {
	
	
	
	private AchievementRepository achievementRepository;
	
	public AchievementServiceImpl(AchievementRepository achievementRepository) {
		super();
		this.achievementRepository = achievementRepository;
	}

	@Override
	public List<Achievements> getAllAchievements() {
		// TODO Auto-generated method stub
		return achievementRepository.findAll();
	}

	@Override
	public Achievements saveAchievement(Achievements achievement) {
		// TODO Auto-generated method stub
		return achievementRepository.save(achievement);
	}
	
	

}
