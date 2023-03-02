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
	private long id;

	@Column(name="NAME")
	private String awardName;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="LAST_UPDATED_DATE")
	private Date lastUpdatedDate;
	
	@Column(name = "AWARD_STATUS")
	private int awardStatus;
	
	@Column(name="AWARD_POINTS")
	private int awardPoints;
	
	
	

	public AwardType() {
		super();
	}
	
	

	public AwardType(String awardName, String description, Date createdDate, Date lastUpdatedDate, int awardStatus,
			int awardPoints) {
		super();
		this.awardName = awardName;
		this.description = description;
		this.createdDate = createdDate;
		this.lastUpdatedDate = lastUpdatedDate;
		this.awardStatus = awardStatus;
		this.awardPoints = awardPoints;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
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
	
	
	
}
