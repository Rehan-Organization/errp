package com.abs.errp.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="AWARD_REQUEST")
public class AwardRequest {

	@Id
	@Column(name="REQUEST_ID")
	private int requestId;
	
	@Column(name="AWARD_ID")
	private int awardId;
	
	@Column(name="AWARDEE_ID")
	private int awardeeId;
	
	@Column(name="AWARD_RAISED_BY_ID")
	private int awardRaisedBy;
	
	@Column(name="SUBMITTED_TO_ID")
	private int submittedToId;
	
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="UPDATED_DATE")
	private Date updatedDate;
	
	@Column(name = "AWARD_REQUEST_STATUS")
	private int awardRequestStatus;
	
	@Column(name="REMARKS")
	private String remarks;
	
	@Column(name="SUPERVISOR_COMMENTS")
	private String supervisorComments;

	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
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

	public int getAwardRaisedBy() {
		return awardRaisedBy;
	}

	public void setAwardRaisedBy(int awardRaisedBy) {
		this.awardRaisedBy = awardRaisedBy;
	}

	public int getSubmittedToId() {
		return submittedToId;
	}

	public void setSubmittedToId(int submittedToId) {
		this.submittedToId = submittedToId;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public int getAwardRequestStatus() {
		return awardRequestStatus;
	}

	public void setAwardRequestStatus(int awardRequestStatus) {
		this.awardRequestStatus = awardRequestStatus;
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
