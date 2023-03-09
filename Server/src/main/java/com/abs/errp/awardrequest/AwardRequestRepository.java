package com.abs.errp.awardrequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abs.errp.entity.AwardRequest;

@Repository
public interface AwardRequestRepository extends JpaRepository<AwardRequest, Integer>{
}
