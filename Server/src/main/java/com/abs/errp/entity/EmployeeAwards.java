package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="EMPLOYEE_AWARD")
public class EmployeeAwards {
	
	@Id
	@Column(name="EMPLOYEE_AWARD_ID")
	private long employeeAwardId;
	
	@Column(name="AWARD_ID")
	private long awardId;
	
	@Column(name="AWARDEE_ID")
	private long awardeeId;
	
	@Column(name="AWARD_RAISEd_By_ID")
	private long awardRaiserId;
	
	@Column(name="ACHIEVEMENT_ID")
	private long achievementId;
	
	@Column(name="REQUEST_ID")
	private long requestId;
	
	@Column(name="APPROVED_BY_ID")
	private long approvedById;
	
	@Column(name="APPROVED_DATE")
	private Date approvedDate;
	
	@Column(name="REMARKS")
	private String remarks;
	
	@Column(name="SUPERVISOR_COMMENTS")
	private String supervisorComments;
	

}
