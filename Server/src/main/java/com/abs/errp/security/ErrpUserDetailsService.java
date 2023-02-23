package com.abs.errp.security;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.abs.errp.user.ErrpUser;
import com.abs.errp.user.Role;
import com.abs.errp.user.UserRepository;


public class ErrpUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) {
		ErrpUser user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException(username);
		}
		return new User(user.getUsername(), user.getPassword(), buildUserAuthority(user.getRoles()));
	}
	
	private List<GrantedAuthority> buildUserAuthority(Set<Role> userRoles) {

		Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();

		// Build user's authorities
		for (Role userRole : userRoles) {
			setAuths.add(new SimpleGrantedAuthority("ROLE_" + userRole.getRoleName()));
		}

		List<GrantedAuthority> result = new ArrayList<GrantedAuthority>(setAuths);

		return result;
	}

}
