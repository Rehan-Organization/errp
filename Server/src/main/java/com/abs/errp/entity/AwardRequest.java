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
	private long id;
	
	@Column(name="AWARD_ID")
	private long awardId;
	
	@Column(name="AWARDEE_ID")
	private long awardeeId;
	
	@Column(name="AWARD_RAISER_ID")
	private long awardRaiserId;
	
	@Column(name="SUBMITTED_TO_ID")
	private long submittedToId;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="LAST_UPDATED_DATE")
	private Date lastUpdatedDate;
	
	@Column(name = "REQUEST_STATUS")
	private int notificationStatus;
	
	@Column(name="REMARKS")
	private String remarks;
	
	@Column(name="SUPERVISOR_COMMENTS")
	private String supervisorComments;

	public AwardRequest() {
		super();
	}

	
	
	
	

	
	
	
	
}
