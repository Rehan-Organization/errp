package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FEEDBACK")
public class Feedback {
	
	@Id
	@Column(name="FEEDBACK_ID")
	private long id;
	
	@Column(name="SENDER_ID")
	private long senderId;
	
	@Column(name="RECEIVER_ID")
	private long receiverId;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="LAST_UPDATED_DATE")
	private Date lastUpdatedDate;

	public Feedback() {
		super();
	}

	
	

}
