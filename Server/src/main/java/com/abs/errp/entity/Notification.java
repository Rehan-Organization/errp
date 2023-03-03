package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Notification")
public class Notification {

	@Id
	@Column(name = "NOTIFICATION_ID")
	private long id;

	@Column(name = "RECEIVER_ID")
	private long receiverId;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "CREATED_DATE")
	private Date createdDate;

	@Column(name = "LAST_UPDATED_DATE")
	private Date lastUpdatedDate;

	@Column(name = "NOTIFICATION_STATUS")
	private int notificationStatus;

	@Column(name = "EVENT_TYPE")
	private int eventType;

	public Notification() {
		super();
	}
	
	
	
	

	

}
