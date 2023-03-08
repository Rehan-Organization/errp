package com.abs.errp.achievement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.abs.errp.entity.Achievement;
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
		LoggedInUser user = this.userContext.getLoggedInUser();
		List<Achievement> ls = (List<Achievement>) achievementRepository.findByEmployeeId(user.getEmployeeId());
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

	@Override
	public void deleteAchievement(long id) {
//		Achievement existingAchievement = achievementRepository.findByEmployeeId(id).orElseThrow(() ->
//		new ResourceNotFoundException("Achievement","Id",id));
		achievementRepository.deleteById(id);
		
	}

}
