package com.abs.errp.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abs.errp.feedback.ResourceNotFoundException;
import com.abs.errp.security.LoggedInUser;
import com.abs.errp.security.LoggedInUserContext;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository UserRepository;

	@Autowired
	LoggedInUserContext userContext;

	public UserServiceImpl(UserRepository errpUserRepository) {
		super();
		this.UserRepository = errpUserRepository;
	}

	@Override
	public List<ErrpUser> getAllReportees() {
		LoggedInUser user = this.userContext.getLoggedInUser();
		ErrpUser e = new ErrpUser();
		e.setEmployeeId(user.getEmployeeId());
		List<ErrpUser> ErrpUsers = UserRepository.findBySupervisor(e);
		int index = -1;
		for (int i = 0; i < ErrpUsers.size(); i++) {
			if (ErrpUsers.get(i).getEmployeeId() == user.getEmployeeId()) {
				index = i;
			}
		}
		if (index != -1)
			ErrpUsers.remove(index);
		if (ErrpUsers.size() > 0) {
			return ErrpUsers;
		} else {
			throw new ResourceNotFoundException("No reportees asssigned");
		}
	}

}
