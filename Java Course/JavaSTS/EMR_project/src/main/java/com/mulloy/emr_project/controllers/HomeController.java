package com.mulloy.emr_project.controllers;

import java.util.Date;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.mulloy.emr_project.models.LoginProvider;
import com.mulloy.emr_project.models.Patient;
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
	
	
//	"/change/passwordanotherway/${providerToEdit.id}
	@PostMapping("/change/password/{id}")
	public String change_password(@PathVariable("id") Long id, @RequestParam("password") String newPassword, HttpSession session) {
		Provider providerToEdit = this.appServ.one_provider(id);
		//send the providerToEdit and the newPassword to service where the service will encrypt the newPassword set the providerToEdit.setPassword to be the new encrypted passsword
		this.appServ.update_provider(providerToEdit, newPassword);
		return "redirect:/dashboard";
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
	
	//Goes to Form to register patient
	@GetMapping("/register/patient")
	public String register_patient(Model model) {
		model.addAttribute("patientP", new Patient());
		return "register/patient.jsp";
	}
	//Submit the register patient form
	@PostMapping("/search/register/patient")
		public String if_patient_exists(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("dateOfBirth") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)  Date dateOfBirth) {
		Optional<Patient> possiblePatient = this.appServ.find_patient(firstName, lastName, dateOfBirth);
		
		//if patient is already in DB
		if(possiblePatient.isPresent()) {
			Patient p = possiblePatient.get();
			Long id = p.getId();
			return "redirect:/prePopForm/"+id;
		}
		//new patient
		else {
			return "redirect:/newForm";
		}
	}
	@GetMapping("/prePopForm/{id}")
	public String existing_patient_form(Model model, @PathVariable("id") Long id) {
		Patient possiblePatient = this.appServ.find_one_patient(id);
		model.addAttribute("patientP", possiblePatient);
		return "register/prePopForm.jsp";
	}
	
	@PutMapping("/confirm/patient/info/{id}")
	public String confirm_patient(@PathVariable("id") Long id, @Valid @ModelAttribute("patientP") Patient possiblePatient, BindingResult result) {
		if (result.hasErrors()) {
			return "register/prePopForm.jsp";
		}else {
			this.appServ.register_patient(possiblePatient);
			return "redirect:/newChart/"+id;
		}
	}
	
	@GetMapping("/newForm")
	public String new_patient_form(Model model) {
		model.addAttribute("newPatient", new Patient());
		return "register/newForm.jsp"; 
	}
	
	@GetMapping("/newChart/{id}")
	public String new_chart() {
		return "newChart.jsp";
	}
	
}
