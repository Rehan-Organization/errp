package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AwardType")
public class AwardType {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="AWARD_ID")
	private long awardId;

	@Column(name="AWARD_NAME")
	private String awardName;
	
	@Column(name="AWARD_DESC")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="UPDATED_DATE")
	private Date updatedDate;
	
	@Column(name = "AWARD_STATUS")
	private int awardStatus = 1;
	
	@Column(name="AWARD_POINTS")
	private int awardPoints;
	
	@Column(name="CREATED_BY")
	private long createdBy;
	
	@Column(name="UPDATED_BY")
	private long updatedBy;
	

	public AwardType() {
		super();
	}


	public AwardType(long awardId, String awardName, String description, Date createdDate, Date updatedDate,
			int awardStatus, int awardPoints, long createdBy, long updatedBy) {
		super();
		this.awardId = awardId;
		this.awardName = awardName;
		this.description = description;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
		this.awardStatus = awardStatus;
		this.awardPoints = awardPoints;
		this.createdBy = createdBy;
		this.updatedBy = updatedBy;
	}


	public long getAwardId() {
		return awardId;
	}


	public void setAwardId(long awardId) {
		this.awardId = awardId;
	}


	public String getAwardName() {
		return awardName;
	}


	public void setAwardName(String awardName) {
		this.awardName = awardName;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
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


	public int getAwardStatus() {
		return awardStatus;
	}


	public void setAwardStatus(int awardStatus) {
		this.awardStatus = awardStatus;
	}


	public int getAwardPoints() {
		return awardPoints;
	}


	public void setAwardPoints(int awardPoints) {
		this.awardPoints = awardPoints;
	}


	public long getCreatedBy() {
		return createdBy;
	}


	public void setCreatedBy(long createdBy) {
		this.createdBy = createdBy;
	}


	public long getUpdatedBy() {
		return updatedBy;
	}


	public void setUpdatedBy(long updatedBy) {
		this.updatedBy = updatedBy;
	}
	
}
