package com.abs.errp;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
//public class DatasourceConfig {
//    @Bean
//    public DataSource getDataSource() {
//    	return DataSourceBuilder.create()
//    	          .driverClassName("org.mariadb.jdbc.Driver")
//    	          .url("jdbc:mariadb://localhost:3307/errp")
//    	          .username("root")
//    	          .password("root")
//    	          .build();	
//    }
//}
