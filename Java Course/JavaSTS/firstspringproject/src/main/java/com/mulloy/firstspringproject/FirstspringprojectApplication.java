package com.mulloy.firstspringproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
// 1. Annotation
@RestController
public class FirstspringprojectApplication {
        public static void main(String[] args) {
                SpringApplication.run(FirstspringprojectApplication.class, args);
        }
        
}

