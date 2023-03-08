package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ACHIEVEMENTS")
public class Achievement {
	
	@Id
	@Column(name="ACHIEVEMENT_ID")
	private long id;
	
	@Column(name = "EMPLOYEE_ID")
	private long employeeId;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="UPDATED_DATE")
	private Date updatedDate;
	
	@Column(name = "ACHIEVEMENT_STATUS")
	private int achievementStatus;
	
	public Achievement() {
		super();
	}







	public long getId() {
		return id;
	}







	public void setId(long id) {
		this.id = id;
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







	public Date getUpdatedDate() {
		return updatedDate;
	}







	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}







	public int getAchievementStatus() {
		return achievementStatus;
	}







	public void setAchievementStatus(int achievementStatus) {
		this.achievementStatus = achievementStatus;
	}










	

	
	

}
