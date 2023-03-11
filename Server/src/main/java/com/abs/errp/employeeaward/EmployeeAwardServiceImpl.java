package com.abs.errp.employeeaward;

import org.springframework.stereotype.Service;


@Service
public class EmployeeAwardServiceImpl implements EmployeeAwardService {

	private EmployeeAwardRepository awardServiceRespository;

	public EmployeeAwardServiceImpl(EmployeeAwardRepository awardServiceRespository) {
		super();
		this.awardServiceRespository = awardServiceRespository;
	}

	

}
