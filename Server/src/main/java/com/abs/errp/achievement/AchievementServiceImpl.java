package com.abs.errp.achievement;

import java.util.Date;
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
	private static final char[] UpdatedDate = null;

	private AchievementRepository achievementRepository;

	@Autowired
	LoggedInUserContext userContext;
	
	
	//returns logged in user	
	public LoggedInUser getUser() {
		
		return this.userContext.getLoggedInUser();
	}

	// Check if user is authorized for the action
	// achievement's employeeId should be same as logged in user's id

	public boolean isAuthorized(Achievement achievement) {
		LoggedInUser user = this.userContext.getLoggedInUser();
		return achievement.getEmployeeId() == user.getEmployeeId();
	}

	// Check if achievement exists and user is authorized for the action

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

		if (isAuthorized(achievement)) {
			 	
			achievement.setCreatedDate(new Date());
			achievement.setUpdatedDate(new Date());
			achievement.setCreatedBy(this.getUser().getEmployeeId());
			achievement.setUpdatedBy(this.getUser().getEmployeeId());
			achievement.setAchievementStatus(0);

			return achievementRepository.save(achievement);
		} else {
			throw new NotAuthorizedException(
					String.format("Achievement with id %d cannot be saved!", achievement.getAchievementId()));
		}

	}

	@Override
	public List<Achievement> findPaginated(int pageNo, int pageSize) {
		
		Sort sort = Sort.by("updatedDate").descending();
		Pageable paging = PageRequest.of(pageNo, pageSize, sort);
		return achievementRepository.findAllByEmployeeId(this.getUser().getEmployeeId(), paging);

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
	public Achievement updateAchievement(Achievement achievement) {

		if (validateRequest(achievement.getAchievementId())) {

			Optional<Achievement> optionalAchievement = this.achievementRepository.findById(achievement.getAchievementId());
			Achievement updateAchievement = optionalAchievement.get();
			updateAchievement.setUpdatedBy(this.getUser().getEmployeeId());
			updateAchievement.setUpdatedDate(new Date());
			updateAchievement.setAchievementDesc(achievement.getAchievementDesc());
			updateAchievement.setTitle(achievement.getTitle());
			

			return this.achievementRepository.save(updateAchievement);

		} else {
			throw new ResourceNotFoundException(
					String.format("Achievement with id %d Not Found", achievement.getAchievementId()));
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

			achievement.setCreatedBy(this.getUser().getEmployeeId());
			achievement.setUpdatedBy(this.getUser().getEmployeeId());
			achievement.setCreatedDate(new Date());
			achievement.setUpdatedDate(new Date());
			achievement.setAchievementStatus(1);
			achievementRepository.save(achievement);
			
			

		} else {

			throw new NotAuthorizedException(
					String.format("Achievement with id %d can not be submitted", achievement.getAchievementId()));

		}
	}

}
