package com.abs.errp.achievement;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.abs.errp.entity.Achievement;
import com.abs.errp.exception.ErrpExceptionHandler;
import com.abs.errp.exception.ResourceNotFoundException;


@Service
public class AchievementServiceImpl implements AchievementService {

	private AchievementRepository achievementRepository;

	public AchievementServiceImpl(AchievementRepository achievementRepository) {
		super();
		this.achievementRepository = achievementRepository;
	}

	@Override
	public List<Achievement> getAllAchievements(long id) {

		return achievementRepository.findByEmployeeId(id);
	}

	@Override
	public Achievement saveAchievement(Achievement achievement) {

		return achievementRepository.save(achievement);
	}

	@Override
	public List<Achievement> findPaginated(int pageNo, int pageSize) {

		Pageable paging = PageRequest.of(pageNo, pageSize);
		Page<Achievement> pagedResult = achievementRepository.findAll(paging);

		return pagedResult.toList();
	}

	@Override
	public Achievement getAchievementById(long id) {
		if(achievementRepository.findById(id).isPresent()) {
			return achievementRepository.findById(id).get();
		}
		else {
			return null; 
		}
	}

	@Override
	public Achievement updateAchievement(Long id, Achievement achievement) {
		Optional<Achievement> achive = achievementRepository.findById(id);
		if(achive.isPresent())
		{
			return achive.get();
			
		}
		else {
			throw new ResourceNotFoundException("achievement","Id",id); 
		}
		
	}

	
  
}
