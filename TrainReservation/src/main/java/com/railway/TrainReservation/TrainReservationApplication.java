package com.railway.TrainReservation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.railway.TrainReservation.model.Reservation;
import com.railway.TrainReservation.repository.ReservationRepository;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class TrainReservationApplication
//implements CommandLineRunner 
{

	

	public static void main(String[] args) {
		SpringApplication.run(TrainReservationApplication.class, args);
		System.out.println("Done 2 !");
	}

	
	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.railway"))
				.build().apiInfo(apiDetails());
	}

	private ApiInfo apiDetails() {
		return new ApiInfo("Train Resrvation API", "API for Railway Reservation System", "1.0", "Free to use",
				new springfox.documentation.service.Contact("Sachin Rathod", null,
						"sachin.rathod28@gmail.com"),
				"", "", Collections.emptyList());
	}

}
