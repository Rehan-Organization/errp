package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="feedback")
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

	


	public long getId() {
		return id;
	}




	public long getSenderId() {
		return senderId;
	}




	public long getReceiverId() {
		return receiverId;
	}




	public String getTitle() {
		return title;
	}




	public String getDescription() {
		return description;
	}




	public Date getCreatedDate() {
		return createdDate;
	}




	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}




	public void setId(long id) {
		this.id = id;
	}




	public void setSenderId(long senderId) {
		this.senderId = senderId;
	}




	public void setReceiverId(long receiverId) {
		this.receiverId = receiverId;
	}




	public void setTitle(String title) {
		this.title = title;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}




	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}




	@Override
	public String toString() {
		return "Feedback [id=" + id + ", senderId=" + senderId + ", receiverId=" + receiverId + ", title=" + title
				+ ", description=" + description + ", createdDate=" + createdDate + ", lastUpdatedDate="
				+ lastUpdatedDate + "]";
	}
	
	

}
