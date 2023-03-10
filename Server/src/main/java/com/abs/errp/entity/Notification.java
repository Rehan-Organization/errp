package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Notification")
public class Notification {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="NOTIFICATION_ID")
	private int notificationId;
	
	@Column(name="RECEIVER_ID")
	private int receiverId;
	
	@Column(name="TITLE")
	private String title;
	
	@Column(name="NOTIFICATION_DESC")
	private String notificationDesc;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="NOTIFICATION_STATUS")
	private int notificationStatus;
	
	@Column(name="EVENT_TYPE")
	private int eventType;

	public Notification() {
		super();
	}

	public Notification(int notificationId, int receiverId, String title, String notificationDesc, Date createdDate,
			int notificationStatus, int eventType) {
		super();
		this.notificationId = notificationId;
		this.receiverId = receiverId;
		this.title = title;
		this.notificationDesc = notificationDesc;
		this.createdDate = createdDate;
		this.notificationStatus = notificationStatus;
		this.eventType = eventType;
	}

	public int getNotificationId() {
		return notificationId;
	}

	public int getReceiverId() {
		return receiverId;
	}

	public String getTitle() {
		return title;
	}

	public String getNotificationDesc() {
		return notificationDesc;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public int getNotificationStatus() {
		return notificationStatus;
	}

	public int getEventType() {
		return eventType;
	}

	public void setNotificationId(int notificationId) {
		this.notificationId = notificationId;
	}

	public void setReceiverId(int receiverId) {
		this.receiverId = receiverId;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setNotificationDesc(String notificationDesc) {
		this.notificationDesc = notificationDesc;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public void setNotificationStatus(int notificationStatus) {
		this.notificationStatus = notificationStatus;
	}

	public void setEventType(int eventType) {
		this.eventType = eventType;
	}
	
	
	
}
