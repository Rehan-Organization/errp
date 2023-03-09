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
@Table(name="feedback")
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="FEEDBACK_ID")
	private int id;
	
    @OneToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name = "SENDER_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser senderId;
	
    @OneToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "RECEIVER_ID", referencedColumnName = "EMPLOYEE_ID")
	private ErrpUser receiverId;
	
	@Column(name ="TITLE")
	private String title;
	
	@Column(name="FEEDBACK_DESC")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="UPDATED_DATE")
	private Date lastUpdatedDate;

	
	
	public int getId() {
		return id;
	}

	public ErrpUser getReceiverId() {
		return receiverId;
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


	public ErrpUser getSenderId() {
		return senderId;
	}

	public void setSenderId(ErrpUser senderId) {
		this.senderId = senderId;
	}

	public void setReceiverId(ErrpUser receiverId) {
		this.receiverId = receiverId;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
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
