package com.abs.errp.awardrequest;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abs.errp.entity.AwardRequest;

public interface AwardRequestRepository extends JpaRepository<AwardRequest, Integer> {
}
