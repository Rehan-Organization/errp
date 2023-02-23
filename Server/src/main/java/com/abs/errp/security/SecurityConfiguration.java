package com.abs.errp.security;

import java.util.HashMap;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.session.MapSessionRepository;
import org.springframework.session.web.http.HeaderHttpSessionIdResolver;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		  prePostEnabled = true, 
		  securedEnabled = true, 
		  jsr250Enabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Bean
	public AuthenticationManager authManager(HttpSecurity http) throws Exception {
		AuthenticationManagerBuilder authenticationManagerBuilder = http
				.getSharedObject(AuthenticationManagerBuilder.class);
		authenticationManagerBuilder.authenticationProvider(authenticationProvider());
		return authenticationManagerBuilder.build();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors().and().csrf().disable().authorizeRequests().antMatchers("/", "/authenticate", "/logout")
				.permitAll().antMatchers("**").authenticated().and().exceptionHandling()
				.defaultAuthenticationEntryPointFor(nsWebUnauthorizedEntryPoint(), new AntPathRequestMatcher("/**"))
				.and().logout().disable();
	}

	@Bean
	public UserDetailsService userDetailsService() {
		return new ErrpUserDetailsService();
//		UserDetails user = User.withUsername("user")
//				.password("$2a$12$di4uEHUa0aKdPV6qkOsdSu8/u9D2ig36gGr4FiJOUC49xAxXLe2/y").roles("USER").build();
//
//		return new InMemoryUserDetailsManager(user);
	}

	@Bean
	@Primary
	public HeaderHttpSessionIdResolver xAuth() {
		return HeaderHttpSessionIdResolver.xAuthToken();
	}

	@Bean
	@Primary
	public MapSessionRepository mapSessionRepository() {
		return new MapSessionRepository(new HashMap<>());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService());
		provider.setPasswordEncoder(passwordEncoder());

		return provider;
	}

	@Bean
	public CustomAuthenticationEntryPoint nsWebUnauthorizedEntryPoint() {
		return new CustomAuthenticationEntryPoint();
	}
}
