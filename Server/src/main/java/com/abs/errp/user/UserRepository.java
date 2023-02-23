package com.abs.errp.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<ErrpUser, Long> {

    ErrpUser findByUsername(String username);
}
