package com.abs.errp.achievement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.abs.errp.entity.Achievement;
import com.abs.errp.exception.ResourceNotFoundException;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;

@Service
public class AchievementServiceImpl implements AchievementService {
	private AchievementRepository achievementRepository;
	@Autowired
	LoggedInUserContext userContext;

	public AchievementServiceImpl(AchievementRepository achievementRepository) {
		super();
		this.achievementRepository = achievementRepository;
	}

	@Override
	public List<Achievement> getAllAchievements() {
		return null;
	}

	@Override
	public Achievement saveAchievement(Achievement achievement) {
		return achievementRepository.save(achievement);
	}

	public List<Achievement> findPaginated1(int pageNo, int pageSize) {
		Pageable paging = PageRequest.of(pageNo, pageSize);
		Page<Achievement> pagedResult = achievementRepository.findAll(paging);

		return pagedResult.toList();
	}

	@Override
	public List<Achievement> findPaginated(int pageNo, int pageSize) {
		Sort sort = Sort.by("updatedDate").descending();
		LoggedInUser user = this.userContext.getLoggedInUser();
		Pageable paging = PageRequest.of(pageNo, pageSize, sort);
		return achievementRepository.findAllByEmployeeId(user.getEmployeeId(), paging);

	}

	@Override
	public void deleteAchievement(int id) {
		if (achievementRepository.findById(id).isPresent()) {
			achievementRepository.deleteById(id);
		} else {
			throw new ResourceNotFoundException("achievement", "Id", id);
		}
		
		
	}

	public Achievement getAchievementById(int id) {
		if (achievementRepository.findById(id).isPresent()) {
			return achievementRepository.findById(id).get();
		} else {
			throw new ResourceNotFoundException("achievement", "Id", id);
		}

	}

	@Override
	public Achievement updateAchievement(int id, Achievement achievement) {
		Achievement oldAchievement;
		Optional<Achievement> optionalAchievement = achievementRepository.findById(id);
		if (optionalAchievement.isPresent()) {
			oldAchievement = optionalAchievement.get();

		} else {
			throw new ResourceNotFoundException("achievement", "Id", id);
		}

		System.out.println(oldAchievement.toString());
		return this.saveAchievement(achievement);

	}

	

	@Override
	public void submitAchievement(Achievement achievement) {
		this.saveAchievement(achievement);
	}

}
