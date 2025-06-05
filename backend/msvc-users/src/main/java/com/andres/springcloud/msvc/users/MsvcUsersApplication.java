package com.andres.springcloud.msvc.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MsvcUsersApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsvcUsersApplication.class, args);
	}

}
