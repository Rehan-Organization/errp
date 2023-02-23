package com.abs.errp.user;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name = "ERRP_USER")
public class ErrpUser {

	@Id
	@Column(name = "EMPLOYEE_ID")
	private Long employeeId;

	@Column(name = "USERNAME", nullable = false, unique = true)
	private String username;

	@Column(name = "PASSWORD")
	private String password;

	@Column(name = "EMPLOYEE_NAME")
	private String employeeName;

	@Column(name = "ENABLED")
	private boolean enabled;

	@ManyToOne
	@JoinColumn(name = "SUPERVISOR_ID")
	private ErrpUser supervisor;

	@OneToMany(mappedBy = "supervisor")
	private Set<ErrpUser> reportees;
	
	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "USER_ROLE",
            joinColumns = @JoinColumn(name = "EMPLOYEE_ID"),
            inverseJoinColumns = @JoinColumn(name = "ROLE_ID")
    )
    private Set<Role> roles = new HashSet<>();

	public ErrpUser() {

	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public ErrpUser getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(ErrpUser supervisor) {
		this.supervisor = supervisor;
	}

	public Set<ErrpUser> getReportees() {
		return reportees;
	}

	public void setReportees(Set<ErrpUser> reportees) {
		this.reportees = reportees;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public boolean isAccountNonExpired() {
		return true;
	}

	public boolean isAccountNonLocked() {
		return true;
	}

	public boolean isCredentialsNonExpired() {
		return true;
	}
}
