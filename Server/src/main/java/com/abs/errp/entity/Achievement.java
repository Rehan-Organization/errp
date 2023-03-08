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
@Table(name="ACHIEVEMENT")
public class Achievement {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ACHIEVEMENT_ID")
	private int achievementId;
	
	
	@Column(name="EMPLOYEE_ID")
	private int employeeId;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="ACHIEVEMENT_DESC")
	private String achievementDesc;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="UPDATED_DATE")
	private Date updatedDate;
	
	@Column(name="CREATED_BY")
	private int createdBy;
	
	@Column(name="UPDATED_BY")
	private int updatedBy;
	
	@Column(name = "ACHIEVEMENT_STATUS")
	private int achievementStatus;

	@Override
	public String toString() {
		return "Achievement [achievementId=" + achievementId + ", employeeId=" + employeeId + ", title=" + title
				+ ", achievementDesc=" + achievementDesc + ", createdDate=" + createdDate + ", updatedDate="
				+ updatedDate + ", createdBy=" + createdBy + ", updatedBy=" + updatedBy + ", achievementStatus="
				+ achievementStatus + "]";
	}

	public int getAchievementId() {
		return achievementId;
	}

	public void setAchievementId(int achievementId) {
		this.achievementId = achievementId;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAchievementDesc() {
		return achievementDesc;
	}

	public void setAchievementDesc(String achievementDesc) {
		this.achievementDesc = achievementDesc;
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

	public int getAchievementStatus() {
		return achievementStatus;
	}
	

	public Achievement(int employeeId, String title, String achievementDesc, Date createdDate, Date updatedDate,
			int createdBy, int updatedBy, int achievementStatus) {
		super();
		this.employeeId = employeeId;
		this.title = title;
		this.achievementDesc = achievementDesc;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
		this.createdBy = createdBy;
		this.updatedBy = updatedBy;
		this.achievementStatus = achievementStatus;
	}

	public void setAchievementStatus(int achievementStatus) {
		this.achievementStatus = achievementStatus;
	}

	public Achievement() {
		super();
	}
	
	
	
	
}
