package com.mulloy.daikichiroutes;

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
	}
	


