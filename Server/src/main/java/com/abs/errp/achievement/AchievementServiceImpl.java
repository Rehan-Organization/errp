package com.abs.errp.achievement;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.abs.errp.entity.Achievement;

@Service
public class AchievementServiceImpl implements AchievementService {

	private AchievementRepository achievementRepository;

	public AchievementServiceImpl(AchievementRepository achievementRepository) {
		super();
		this.achievementRepository = achievementRepository;
	}

	@Override
	public List<Achievement> getAllAchievements() {

		List<Achievement> ls = (List<Achievement>) achievementRepository.findAll();
		for(int i=0;i<ls.size();i++)System.out.println(ls.get(i).toString());
		return ls;
	}

	@Override
	public Achievement saveAchievement(Achievement achievement) {

		return achievementRepository.save(achievement);
	}

	@Override
	public List<Achievement> findPaginated(int pageNo, int pageSize) {

		Pageable paging = PageRequest.of(pageNo, pageSize);
		Page<Achievement> pagedResult = achievementRepository.findAll(paging);
		achievementRepository.findById(null);

		return pagedResult.toList();
	}

}
