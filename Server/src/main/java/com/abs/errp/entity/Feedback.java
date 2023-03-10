package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "FEEDBACK_ID")
	private int feedbackId;

	@Column(name = "SENDER_ID")
	private int senderId;

	@Column(name = "RECEIVER_ID")
	private int receiverId;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "FEEDBACK_DESC")
	private String feedbackDesc;

	@Column(name = "CREATED_DATE")
	private Date createdDate;

	@Column(name = "UPDATED_DATE")
	private Date updatedDate;

	public Feedback() {
		super();
	}

	public Feedback(int feedbackId, int senderId, int receiverId, String title, String feedbackDesc, Date createdDate,
			Date updatedDate) {
		super();
		this.feedbackId = feedbackId;
		this.senderId = senderId;
		this.receiverId = receiverId;
		this.title = title;
		this.feedbackDesc = feedbackDesc;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public int getSenderId() {
		return senderId;
	}

	public int getReceiverId() {
		return receiverId;
	}

	public String getTitle() {
		return title;
	}

	public String getFeedbackDesc() {
		return feedbackDesc;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public void setSenderId(int senderId) {
		this.senderId = senderId;
	}

	public void setReceiverId(int receiverId) {
		this.receiverId = receiverId;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setFeedbackDesc(String feedbackDesc) {
		this.feedbackDesc = feedbackDesc;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

}
