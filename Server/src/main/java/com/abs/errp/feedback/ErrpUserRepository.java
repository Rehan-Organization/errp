package com.abs.errp.feedback;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.abs.errp.user.ErrpUser;

public interface ErrpUserRepository extends JpaRepository<ErrpUser, Long> {
	List<ErrpUser> findBySupervisor(ErrpUser e);
}
