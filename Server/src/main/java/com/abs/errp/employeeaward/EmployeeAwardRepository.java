package com.abs.errp.employeeaward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abs.errp.entity.EmployeeAward;
@Repository
public interface EmployeeAwardRepository extends JpaRepository<EmployeeAward, Integer>{

}
