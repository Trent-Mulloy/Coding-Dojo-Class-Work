package com.mulloy.emr_project.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.mulloy.emr_project.models.LoginProvider;
import com.mulloy.emr_project.models.Provider;
import com.mulloy.emr_project.services.AppService;

@Controller
public class HomeController {

	@Autowired
	private AppService appServ;
	
	//=================================
	//Admin adds provider into system
	//=================================
	
	@GetMapping("/admin/register/new/provider")
	public String register_new_provider(Model model) {
		model.addAttribute("newProvider", new Provider());
		return "register/provider.jsp";
	}
	
	@PostMapping("/admin/register/provider")
	public String register_provider(@Valid @ModelAttribute("newProvider") Provider newProvider, BindingResult result, Model model) {
		
		this.appServ.register(newProvider, result);
		if(result.hasErrors()) {
			return "register/provider.jsp";
		}else {
			return "redirect:/admin/register/new/provider";
		}
	}
	//=============================================
	//=============================================
	
	//============================================
	//routes for a provider
	//===========================================
	//starting page/ login page
	@GetMapping("/")
	public String login_page(Model model) {
		model.addAttribute("newLogin", new LoginProvider());
		return "login.jsp";
	}
	//Provider logs in
	@PostMapping("/login/provider")
	public String login(@Valid @ModelAttribute("newLogin") LoginProvider newLogin, BindingResult result, Model model, HttpSession session) {
		Provider provider = appServ.login(newLogin, result);
		if(result.hasErrors()) {
			return "login.jsp";
		}
		if(provider.getUpdatedAt() == null) {
			session.setAttribute("sessionId", provider.getId());
			return "redirect:/update/password";
		}
		else {
			session.setAttribute("sessionId", provider.getId());
			return "redirect:/dashboard";
		}
	}
	
	//Update Provider password page
	@GetMapping("/update/password")
	public String update_password(Model model, HttpSession session) {
		Long providerId = (long) session.getAttribute("sessionId");
		Provider providerToEdit = this.appServ.one_provider(providerId);
		model.addAttribute("providerToEdit", providerToEdit);
		return "update/providerPassword.jsp";
	}
	
	//updates the password
	@PutMapping("/change/password/{id}")
	public String change_password(@PathVariable("id") Long id, @Valid @ModelAttribute("providerToEdit")Provider providerToEdit, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			System.out.println(result);
			return "update/providerPassword.jsp"; 
		}else {
			this.appServ.update_provider(providerToEdit);
			return "redirect:/dashboard";
		}
	}
	
	//render the dash board page for provider
	@GetMapping("/dashboard")
	public String show_dashboard(HttpSession session, Model model) {
		if(session.getAttribute("sessionId") == null) {
			 return "redirect:/";
		 }
		else {
			Long providerId = (long) session.getAttribute("sessionId");
			model.addAttribute("provider", this.appServ.one_provider(providerId));
			return "dashboard.jsp";
		}
	}

}
