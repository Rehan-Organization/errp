package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EMPLOYEE_AWARD")
public class EmployeeAward {

	@Id
	@Column(name = "EMPLOYEE_AWARD_ID")
	private int employeeAwardId;

	@Column(name = "AWARD_ID")
	private int awardId;

	@Column(name = "AWARDEE_ID")
	private int awardeeId;

	@Column(name = "AWARD_RAISED_BY_ID")
	private int awardRaisedById;

	@Column(name = "ACHIEVEMENT_ID")
	private int achievementId;

	@Column(name = "REQUEST_ID")
	private int requestId;

	@Column(name = "APPROVED_BY_ID")
	private int approvedById;

	@Column(name = "APPROVED_DATE")
	private Date approvedDate;

	@Column(name = "REMARKS")
	private String remarks;

	@Column(name = "SUPERVISOR_COMMENTS")
	private String supervisorComments;

	public int getEmployeeAwardId() {
		return employeeAwardId;
	}

	public void setEmployeeAwardId(int employeeAwardId) {
		this.employeeAwardId = employeeAwardId;
	}

	public int getAwardId() {
		return awardId;
	}

	public void setAwardId(int awardId) {
		this.awardId = awardId;
	}

	public int getAwardeeId() {
		return awardeeId;
	}

	public void setAwardeeId(int awardeeId) {
		this.awardeeId = awardeeId;
	}

	public int getAwardRaisedById() {
		return awardRaisedById;
	}

	public void setAwardRaisedById(int awardRaisedById) {
		this.awardRaisedById = awardRaisedById;
	}

	public int getAchievementId() {
		return achievementId;
	}

	public void setAchievementId(int achievementId) {
		this.achievementId = achievementId;
	}

	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public int getApprovedById() {
		return approvedById;
	}

	public void setApprovedById(int approvedById) {
		this.approvedById = approvedById;
	}

	public Date getApprovedDate() {
		return approvedDate;
	}

	public void setApprovedDate(Date approvedDate) {
		this.approvedDate = approvedDate;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getSupervisorComments() {
		return supervisorComments;
	}

	public void setSupervisorComments(String supervisorComments) {
		this.supervisorComments = supervisorComments;
	}

	public EmployeeAward(int employeeAwardId, int awardId, int awardeeId, int awardRaisedById, int achievementId,
			int requestId, int approvedById, Date approvedDate, String remarks, String supervisorComments) {
		super();
		this.employeeAwardId = employeeAwardId;
		this.awardId = awardId;
		this.awardeeId = awardeeId;
		this.awardRaisedById = awardRaisedById;
		this.achievementId = achievementId;
		this.requestId = requestId;
		this.approvedById = approvedById;
		this.approvedDate = approvedDate;
		this.remarks = remarks;
		this.supervisorComments = supervisorComments;
	}

	public EmployeeAward(int awardId, int awardeeId, int awardRaisedById, int achievementId, int requestId,
			int approvedById, Date approvedDate, String remarks, String supervisorComments) {
		super();
		this.awardId = awardId;
		this.awardeeId = awardeeId;
		this.awardRaisedById = awardRaisedById;
		this.achievementId = achievementId;
		this.requestId = requestId;
		this.approvedById = approvedById;
		this.approvedDate = approvedDate;
		this.remarks = remarks;
		this.supervisorComments = supervisorComments;
	}

	public EmployeeAward() {
		super();
	}
	
	
}
