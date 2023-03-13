package com.abs.errp.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<ErrpUser, Integer> {
    ErrpUser findByUsername(String username);
	List<ErrpUser> findBySupervisor(ErrpUser e);
}
