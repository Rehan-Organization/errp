package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@Entity
@Table(name="ACHIEVEMENTS")

public class Achievement {
	@Id
	@Column(name="ACHIEVEMENT_ID")
	private long achievementId;
	
	@Column(name = "EMPLOYEE_ID")
	private long employeeId;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="LAST_UPDATED_DATE")
	private Date lastUpdatedDate;
	
	@Column(name = "ACHIEVEMENT_STATUS")
	private int achievementStatus;
	
	public Achievement() {
		super();
	}

	public long getAchievementId() {
		return achievementId;
	}

	public void setAchievementId(long achievementId) {
		this.achievementId = achievementId;
	}

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public int getAchievementStatus() {
		return achievementStatus;
	}

	public void setAchievementStatus(int achievementStatus) {
		this.achievementStatus = achievementStatus;
	}
}
