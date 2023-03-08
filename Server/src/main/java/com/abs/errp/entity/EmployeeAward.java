package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="EMPLOYEE_AWARDS")
public class EmployeeAward {
	
	@Id
	@Column(name="EMPLOYEE_AWARD_ID")
	private int employeeAwardId;
	
	@Column(name="AWARD_ID")
	private int awardId;
	
	@Column(name="AWARDEE_ID")
	private int awardeeId;
	
	@Column(name="AWARD_RAISED_BY_ID")
	private int awardRaisedById;
	
	@Column(name="ACHIEVEMENT_ID")
	private int achievementId;
	
	@Column(name="REQUEST_ID")
	private int requestId;
	
	@Column(name="APPROVED_BY_ID")
	private int approvedById;
	
	@Column(name="APPROVED_DATE")
	private Date approvedDate;
	
	@Column(name="REMARKS")
	private String remarks;
	
	@Column(name="SUPERVISOR_COMMENTS")
	private String supervisorComments;

	public EmployeeAward() {
		super();
	}
	
	


	

}
