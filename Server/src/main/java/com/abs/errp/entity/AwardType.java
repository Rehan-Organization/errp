package com.abs.errp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AwardType")
public class AwardType {
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private long id;

	@Column(name="NAME")
	private String awardName;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="LAST_UPDATED_DATE")
	private Date lastUpdatedDate;
	
	@Column(name = "AWARD_STATUS")
	private int awardStatus;
	
	@Column(name="AWARD_POINTS")
	private int awardPoints;
	
	
	

	public AwardType() {
		super();
	}
	
	

	
	
	
	
}
