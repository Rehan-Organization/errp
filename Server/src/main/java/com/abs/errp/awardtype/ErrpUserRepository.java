package com.abs.errp.awardtype;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abs.errp.user.ErrpUser;


@Repository
public interface ErrpUserRepository extends JpaRepository<ErrpUser,Integer>{
	
}
