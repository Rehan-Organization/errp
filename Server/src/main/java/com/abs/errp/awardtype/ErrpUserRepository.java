package com.abs.errp.awardtype;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abs.errp.user.ErrpUser;

public interface ErrpUserRepository extends JpaRepository<ErrpUser, Integer> {

}
