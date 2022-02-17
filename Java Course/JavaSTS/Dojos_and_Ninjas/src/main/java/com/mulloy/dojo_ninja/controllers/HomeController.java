package com.mulloy.dojo_ninja.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mulloy.dojo_ninja.models.Dojo;
import com.mulloy.dojo_ninja.models.Ninja;
import com.mulloy.dojo_ninja.servies.AppService;

@Controller
public class HomeController {
	private final AppService appServ;
	
	public HomeController(AppService appServ) {
		this.appServ = appServ;
	}
	
	
	@RequestMapping("/")
	public String index(Model model) {
		// Send an empty Dojo object to form using model for validations
		model.addAttribute("dojo", new Dojo());
		model.addAttribute("allDojos", this.appServ.getAllDojos());
		
		return "index.jsp";
	}
	
	@PostMapping("/dojo/create")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}
		else {
			this.appServ.create_dojo(dojo);
			return "redirect:/";
		}
		
	}
	
	@RequestMapping("/ninja/add")
	public String addNinja(Model model) {
		model.addAttribute("ninja", new Ninja());
		model.addAttribute("alldojos", this.appServ.getAllDojos());
		return "addNinja.jsp";
	}
	
	@PostMapping("/ninja/create")
	public String createNinja(@Valid @ModelAttribute("nina") Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			return "addNinja.jsp";
		}
		else {
			this.appServ.create_ninja(ninja);
			return "redirect:/";
		}
	}
	
	@RequestMapping("/dojos/{id}")
	public String show_one_dojo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo",this.appServ.getOneDojo(id));
		return "OneDojo.jsp";
	}
	
	
	
}
