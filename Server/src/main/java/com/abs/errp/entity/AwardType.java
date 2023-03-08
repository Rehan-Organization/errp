package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="AwardType")
public class AwardType {
	
	@Id
	@Column(name="AWARD_ID")
	private int awardId;
	
	@Column(name="AWARD_NAME")
	private String awardName;
	
	
	@Column(name="AWARD_DESC")
	private String awardDesc;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="UPDATED_DATE")
	private Date updatedDate;

	@Column(name="AWARD_STATUS")
	private int awardStatus;
	
	@Column(name="AWARD_POINTS")
	private int awardPoints;
	
	@Column(name="CREATED_BY")
	private int createdBy;
	
	@Column(name="UPDATED_BY")
	private int updatedBy;
	
}

