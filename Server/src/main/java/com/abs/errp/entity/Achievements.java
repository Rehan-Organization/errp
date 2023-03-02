package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ACHIEVEMENTS")
public class Achievements {
	
	@Id
	@Column(name="ACHIEVEMENT_ID")
	private int id;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="LAST_UPDATED_DATE")
	private Date lastUpdatedDate;
	
	@Column(name = "ACHIEVEMENT_STATUS")
	private int notificationStatus;
	
	@Column(name="EMPLOYEE_COMMENTS")
	private String employeeComments;
	
	

	public Achievements() {
		super();
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
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



	public int getNotificationStatus() {
		return notificationStatus;
	}



	public void setNotificationStatus(int notificationStatus) {
		this.notificationStatus = notificationStatus;
	}



	public String getEmployeeComments() {
		return employeeComments;
	}



	public void setEmployeeComments(String employeeComments) {
		this.employeeComments = employeeComments;
	}

	

	
	

}
