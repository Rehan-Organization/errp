package com.abs.errp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;

@SpringBootApplication
@EnableAutoConfiguration
@EnableSpringHttpSession
public class ErrpApplication {

	public static void main(String[] args) {
		SpringApplication.run(ErrpApplication.class, args);
	}

}
