package com.abs.errp.leaderboard;
import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.abs.errp.entity.EmployeeAward;

public interface LeaderboardRepository extends PagingAndSortingRepository<EmployeeAward, Long>{
	
@Query(nativeQuery=true, value="select e.employee_id as employeeId ,s.employee_id as supervisorId, e.employee_name as employeeName, s.employee_name as supervisorName, sum(award_type.award_points) as awardPoints from employee_award inner join award_type on employee_award.award_id = award_type.award_id inner join errp_user e on e.employee_id = employee_award.awardee_id inner join errp_user s on s.employee_id=e.SUPERVISOR_ID where employee_award.APPROVED_DATE between :startDate and :endDate group by e.employee_id order by awardPoints desc")
List<Leaderboard> getTopEmployeeList(Pageable page, Date startDate, Date endDate);



}
