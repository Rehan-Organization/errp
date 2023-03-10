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
@Table(name="award_type")
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

	public int getAwardId() {
		return awardId;
	}

	public void setAwardId(int awardId) {
		this.awardId = awardId;
	}

	public String getAwardName() {
		return awardName;
	}

	public void setAwardName(String awardName) {
		this.awardName = awardName;
	}

	public String getAwardDesc() {
		return awardDesc;
	}

	public void setAwardDesc(String awardDesc) {
		this.awardDesc = awardDesc;
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

	public int getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(int createdBy) {
		this.createdBy = createdBy;
	}

	public int getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(int updatedBy) {
		this.updatedBy = updatedBy;
	}
	
//	@Override
//	public String toString() {
//		// TODO Auto-generated method stub
//		return awardName;
//	}
//
//	public String getAwardName() {
//		return awardName;
//	}
//
//	public void setAwardName(String awardName) {
//		this.awardName = awardName;
//	}
}

