package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.abs.errp.user.ErrpUser;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "FEEDBACK_ID")
	private int id;

	@OneToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name = "SENDER_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser sender;

	@OneToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name = "RECEIVER_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser receiver;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "FEEDBACK_DESC")
	private String description;

	@Column(name = "CREATED_DATE")
	private Date createdDate;

	@Column(name = "UPDATED_DATE")
	private Date updatedDate;

	public int getId() {
		return id;
	}

	public ErrpUser getReceiver() {
		return receiver;
	}

	public String getTitle() {
		return title;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setId(int id) {
		this.id = id;
	}

	public ErrpUser getSender() {
		return sender;
	}

	public void setSender(ErrpUser sender) {
		this.sender = sender;
	}

	public void setReceiver(ErrpUser receiver) {
		this.receiver = receiver;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Feedback [id=" + id + ", senderId=" + sender + ", receiverId=" + receiver + ", title=" + title
				+ ", description=" + description + ", createdDate=" + createdDate + ", lastUpdatedDate=" + updatedDate
				+ "]";
	}

}
