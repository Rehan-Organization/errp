package com.abs.errp.awardtype;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abs.errp.awardtype.Exception.AwardNameAlreadyExistsException;
import com.abs.errp.awardtype.Exception.AwardTypeNotFoundException;
import com.abs.errp.entity.AwardType;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;

@Service
public class AwardTypeServiceImpl implements AwardTypeService {

	@Autowired
	LoggedInUserContext userContext;

	private AwardTypeRepository awardServiceRespository;

	public AwardTypeServiceImpl(AwardTypeRepository awardServicesRespository) {
		super();
		this.awardServiceRespository = awardServicesRespository;
	}

	@Override
	public List<AwardType> getAllAwardTypes() {
		return awardServiceRespository.findAll();
	}

	@Override
	public AwardType saveAwardType(AwardType awardType) {

		LoggedInUser user = this.userContext.getLoggedInUser();
		String awardName = awardType.getAwardName();
		Optional<AwardType> award = Optional.ofNullable(findAwardByName(awardName));

		if (award.isPresent()) {
			throw new AwardNameAlreadyExistsException("Award name alredy exsists");
		} else {
			awardType.setCreatedBy(user.getEmployeeId());
			awardType.setUpdatedBy(user.getEmployeeId());
			return awardServiceRespository.save(awardType);
		}

	}

	@Override
	public AwardType findAwardByName(String awardName) {
		return awardServiceRespository.findByAwardName(awardName);
	}

	@Override
	public AwardType updateAwardType(Long awardId, AwardType awardType) {

		LoggedInUser user = this.userContext.getLoggedInUser();
		Optional<AwardType> tempAward = awardServiceRespository.findById(awardId);

		if (tempAward.isPresent()) {

			if (tempAward.get().getAwardName().matches(awardType.getAwardName())) {
				awardType.setUpdatedBy(user.getEmployeeId());
				return awardServiceRespository.save(awardType);
			} else {
				String awardName = awardType.getAwardName();
				Optional<AwardType> award = Optional.ofNullable(findAwardByName(awardName));

				if (award.isPresent()) {
					throw new AwardNameAlreadyExistsException("Award name alredy exsists");
				} else {
					awardType.setUpdatedBy(user.getEmployeeId());
					return awardServiceRespository.save(awardType);
				}
			}

		} else {
			throw new AwardTypeNotFoundException("AwardType", "Id", awardId);
		}

	}

	@Override
	public AwardType getAwardTypeById(long awardId) {
		if (awardServiceRespository.findById(awardId).isPresent()) {
			return awardServiceRespository.findById(awardId).get();
		} else {

			throw new AwardTypeNotFoundException("AwardType", "Id", awardId);
		}
	}

}
