package com.mulloy.omikijiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class formcontroller {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(value="/submit", method=RequestMethod.POST)
	public String omikiji(
			@RequestParam(value="num") int num,
			@RequestParam(value="cname") String city_name,
			@RequestParam(value="pname") String person_name,
			@RequestParam(value="hobbie") String hobbie,
			@RequestParam(value="thing") String living_thing,
			@RequestParam(value="nice") String something_nice,
			HttpSession session) {
		session.setAttribute("num", num);
		session.setAttribute("city_name", city_name);
		session.setAttribute("person_name", person_name);
		session.setAttribute("hobbie", hobbie);
		session.setAttribute("living_thing", living_thing);
		session.setAttribute("something_nice", something_nice);
		return "redirect:/result";
	}
	
	@RequestMapping("/result")
	public String Show_Result() {
		return "result.jsp";
	}

}
