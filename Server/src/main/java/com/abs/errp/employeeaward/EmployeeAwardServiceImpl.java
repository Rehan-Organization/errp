package com.abs.errp.employeeaward;

import java.util.List;
import org.springframework.stereotype.Service;
import com.abs.errp.entity.EmployeeAward;

@Service
public class EmployeeAwardServiceImpl implements EmployeeAwardService {

	private EmployeeAwardRepository awardServiceRespository;

	public EmployeeAwardServiceImpl(EmployeeAwardRepository awardServiceRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}

	@Override
	public List<EmployeeAward> getAllEmployeeAward() {

		return awardServiceRespository.findAll();
	}

}
