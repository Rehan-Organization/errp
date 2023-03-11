package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.abs.errp.user.ErrpUser;

@Entity
@Table(name = "EMPLOYEE_AWARD")
public class EmployeeAward {

	@Id
	@Column(name = "EMPLOYEE_AWARD_ID")
	private long employeeAwardId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "AWARD_ID", referencedColumnName = "AWARD_ID")
	private AwardType awardId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "AWARDEE_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser awardeeId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "AWARD_RAISED_BY_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser awardRaiserId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ACHIEVEMENT_ID", referencedColumnName = "ACHIEVEMENT_ID")
	private Achievement achievementId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "REQUEST_ID", referencedColumnName = "REQUEST_ID")
	private AwardRequest requestId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "APPROVED_BY_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser approvedById;

	@Column(name = "APPROVED_DATE")
	private Date approvedDate;

	@Column(name = "REMARKS")
	private String remarks;

	@Column(name = "SUPERVISOR_COMMENTS")
	private String supervisorComments;

	public EmployeeAward() {
		super();
	}

	public EmployeeAward(long employeeAwardId, AwardType awardId, ErrpUser awardeeId, ErrpUser awardRaiserId,
			Achievement achievementId, AwardRequest requestId, ErrpUser approvedById, Date approvedDate, String remarks,
			String supervisorComments) {
		super();
		this.employeeAwardId = employeeAwardId;
		this.awardId = awardId;
		this.awardeeId = awardeeId;
		this.awardRaiserId = awardRaiserId;
		this.achievementId = achievementId;
		this.requestId = requestId;
		this.approvedById = approvedById;
		this.approvedDate = approvedDate;
		this.remarks = remarks;
		this.supervisorComments = supervisorComments;
	}

	public long getEmployeeAwardId() {
		return employeeAwardId;
	}

	public void setEmployeeAwardId(long employeeAwardId) {
		this.employeeAwardId = employeeAwardId;
	}

	public AwardType getAwardId() {
		return awardId;
	}

	public void setAwardId(AwardType awardId) {
		this.awardId = awardId;
	}

	public ErrpUser getAwardeeId() {
		return awardeeId;
	}

	public void setAwardeeId(ErrpUser awardeeId) {
		this.awardeeId = awardeeId;
	}

	public ErrpUser getAwardRaiserId() {
		return awardRaiserId;
	}

	public void setAwardRaiserId(ErrpUser awardRaiserId) {
		this.awardRaiserId = awardRaiserId;
	}

	public Achievement getAchievementId() {
		return achievementId;
	}

	public void setAchievementId(Achievement achievementId) {
		this.achievementId = achievementId;
	}

	public AwardRequest getRequestId() {
		return requestId;
	}

	public void setRequestId(AwardRequest requestId) {
		this.requestId = requestId;
	}

	public ErrpUser getApprovedById() {
		return approvedById;
	}

	public void setApprovedById(ErrpUser approvedById) {
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

}
