package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.CrossOrigin;

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

	public AwardRequest() {
		super();
	}

	
	
	
	

	
	
	
	
}
