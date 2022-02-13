package com.mulloy.daikichiroutes;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class HomeController {
	@RequestMapping("")
	public String welcome() {
		return "welcome";
	}
	@RequestMapping("/today")
	public String today() {
		return "Today You Will Find Luck In All Your Endevours";
	}
	@RequestMapping("/tomorrow")
		public String tomorrow() {
			return "Tomorrow an oppurtunity will arise";
		}
	@RequestMapping("/travel/{city}")
	public String travel(@PathVariable("city") String city){
		return "Congrats You Will Soon Travel To " + city;
		
	}
	@RequestMapping("/lotto/{num}")
	public String lotto(@PathVariable("num") int num) {
		if(num % 2 == 0) {
			return "You will take a Grand Journey In The Near Future";
		}
		else return "You Have Enjoyed The Fruits Of Your Labor...";
	}
	}
	


