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
import com.abs.errp.exception.NotAuthorizedException;
import com.abs.errp.exception.ResourceNotFoundException;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;

@Service
public class AchievementServiceImpl implements AchievementService {

	private AchievementRepository achievementRepository;

	@Autowired
	LoggedInUserContext userContext;

	public boolean isAuthorized(Achievement achievement) {
		LoggedInUser user = this.userContext.getLoggedInUser();
		return achievement.getEmployeeId() == user.getEmployeeId();
	}

	public boolean validateRequest(int id) {
		Optional<Achievement> optionalAchievement = achievementRepository.findById(id);

		return optionalAchievement.isPresent() && isAuthorized(optionalAchievement.get());
	}

	public AchievementServiceImpl(AchievementRepository achievementRepository) {
		super();
		this.achievementRepository = achievementRepository;

	}

	@Override
	public Achievement saveAchievement(Achievement achievement) {
		
		
		if(isAuthorized(achievement))
		{
			
			return achievementRepository.save(achievement);
		}
		else {
			throw new NotAuthorizedException(String.format("Achievement with id %d cannot be saved!",achievement.getAchievementId()));
		}

	}

	@Override
	public List<Achievement> findPaginated(int pageNo, int pageSize) {

		Sort sort = Sort.by("updatedDate").descending();

		LoggedInUser user = this.userContext.getLoggedInUser();
		Pageable paging = PageRequest.of(pageNo, pageSize, sort);
		return achievementRepository.findAllByEmployeeId(user.getEmployeeId(), paging);

	}

	@Override
	public Achievement getAchievementById(int id) {
		if (validateRequest(id)) {
			return achievementRepository.findById(id).get();
		} else {
			throw new ResourceNotFoundException(String.format("Achievement with id %d Not Found", id));
		}

	}

	@Override
	public Achievement updateAchievement(int id, Achievement achievement) {

		if (validateRequest(id)) {
			return this.saveAchievement(achievement);
		} else {
			throw new ResourceNotFoundException(String.format("Achievement with id %d Not Found", id));
		}

	}

	@Override
	public void deleteAchievement(int id) {

		if (validateRequest(id)) {

			achievementRepository.deleteById(id);
		} else {

			throw new ResourceNotFoundException(String.format("Achievement with id %d Not Found", id));
		}

	}

	@Override
	public void submitAchievement(Achievement achievement) {

		if (isAuthorized(achievement)) {

			this.saveAchievement(achievement);
		} else {

			throw new NotAuthorizedException(
					String.format("Achievement with id %d can not be submitted", achievement.getAchievementId()));

		}
	}

}
