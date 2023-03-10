package com.abs.errp.employeeaward;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abs.errp.entity.EmployeeAward;

@RestController
@RequestMapping("/employeeaward")
public class EmployeeAwardController {
	@Autowired
	private EmployeeAwardService employeeawardService;

	public EmployeeAwardController(EmployeeAwardService employeeawardService) {
		super();
		this.employeeawardService = employeeawardService;
	}

	@GetMapping()
	public List<EmployeeAward> getAllEmployeeAward()

	{

		return employeeawardService.getAllEmployeeAward();
	}
}
