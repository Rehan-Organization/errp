package com.abs.errp.awardtype;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.abs.errp.entity.AwardType;

public interface AwardTypeRepository extends JpaRepository<AwardType,Long>{
	
	AwardType findByAwardName(String awardName);

}
