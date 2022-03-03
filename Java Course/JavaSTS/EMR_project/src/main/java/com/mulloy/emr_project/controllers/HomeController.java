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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.mulloy.emr_project.models.LoginProvider;
import com.mulloy.emr_project.models.Patient;
import com.mulloy.emr_project.models.PatientChart;
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
	@RequestMapping("/provider/logout")
	 public String logout(HttpSession session) {
		 session.invalidate();
		 return "redirect:/";
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
			model.addAttribute("allCharts", this.appServ.all_charts());
			return "dashboard.jsp";
		}
	}
	
	//render "My patients" dash board
	@GetMapping("/dashboard/provider/{id}/patients")
	public String my_patients_dash(Model model, @PathVariable("id") Long id, HttpSession session) {
		Provider aProvider = this.appServ.one_provider(id);
		model.addAttribute("myCharts", this.appServ.charts_by_provider(aProvider));
		Long providerId = (long) session.getAttribute("sessionId");
		model.addAttribute("provider", this.appServ.one_provider(providerId));
		return "my_patients_dashboard.jsp";
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
	//Form that shows if an existing patient is found
	@GetMapping("/prePopForm/{id}")
	public String existing_patient_form(Model model, @PathVariable("id") Long id) {
		Patient possiblePatient = this.appServ.find_one_patient(id);
		model.addAttribute("patientP", possiblePatient);
		return "register/prePopForm.jsp";
	}
	//Confirms and updates any info for existing patient
	@PutMapping("/confirm/patient/info/{id}")
	public String confirm_patient(@PathVariable("id") Long id, @Valid @ModelAttribute("patientP") Patient possiblePatient, BindingResult result) {
		if (result.hasErrors()) {
			return "register/prePopForm.jsp";
		}else {
			this.appServ.register_patient(possiblePatient);
			return "redirect:/newChart/"+id;
		}
	}
	//Show empty form if existing patient is not found
	@GetMapping("/newForm")
	public String new_patient_form(Model model) {
		model.addAttribute("newPatient", new Patient());
		return "register/newForm.jsp"; 
	}
	//Submit new patient Form
	@PostMapping("/register/new/patient")
	public String register_new_patient_form(@Valid @ModelAttribute("newPatient") Patient newPatient, BindingResult result) {
		if(result.hasErrors()) {
			return "register/newForm.jsp";
		}
		else {
			Patient p= this.appServ.register_patient(newPatient);
			Long id = p.getId();
			
			return "redirect:/newChart/"+id;
		}
	}
	//Show to screen to make a new visit chart after registering or confirming patient in DB
	@GetMapping("/newChart/{patient_id}")
	public String new_chart(Model model, HttpSession session, @PathVariable("patient_id") Long patient_id) {
		Patient possiblePatient = this.appServ.find_one_patient(patient_id);
		System.out.println(patient_id);
		System.out.println(session.getAttribute("sessionId"));
		model.addAttribute("patientP", possiblePatient);
		model.addAttribute("newChart", new PatientChart());
		
		return "newChart.jsp";
	}
	@PostMapping("/submit/new/chart/{patientid}")
	public String submit_new_chart(@PathVariable("patientid") Long patientId, @Valid @ModelAttribute("newChart") PatientChart newChart, BindingResult result, HttpSession session) {
		Long providerId = (Long) session.getAttribute("sessionId");
		Provider aProvider = this.appServ.one_provider(providerId);
		Patient aPatient = this.appServ.find_one_patient(patientId);
		newChart.setaPatient(aPatient);
		newChart.setaProvider(aProvider);
		newChart.setStatus("open");
		if(result.hasErrors()) {
			return "newChart.jsp";
		}
		else {
			this.appServ.save_new_chart(newChart);
			return "redirect:/dashboard";
		}
	}
	
	//Show Patients Chart with notes and history vistists
	@RequestMapping("/patient/chart/{chartId}")
	public String show_active_chart(Model model, HttpSession session, @PathVariable("chartId")Long chartId) {
		PatientChart currentChart = this.appServ.find_current_chart(chartId);
		Patient aPatient = currentChart.getaPatient();
		model.addAttribute("historyChart", this.appServ.history_charts(aPatient));
		model.addAttribute("currentChart", currentChart);
		return "current_patient_chart.jsp";
	}
	//update the room the patient is in
	@PostMapping("/update/patientRoom/{chartId}")
	public String update_room(@PathVariable("chartId") Long chartId, @RequestParam("room_location") String room) {
		PatientChart currentChart = this.appServ.find_current_chart(chartId);
		currentChart.setRoom(room);
		this.appServ.save_new_chart(currentChart);
		return "redirect:/patient/chart/"+chartId;
	}
	//update the current disposition
	@PostMapping("/update/disposition/{chartId}")
	public String update_disposition(@PathVariable("chartId") Long chartId, @RequestParam("disposition") String dispo) {
		PatientChart currentChart = this.appServ.find_current_chart(chartId);
		currentChart.setDisposition(dispo);
		this.appServ.save_new_chart(currentChart);
		return "redirect:/patient/chart/"+chartId;
	}
	//update the current vitals
	@PostMapping("update/currentVitals/{chartId}")
	public String update_vitals(@PathVariable("chartId") Long chartId, @RequestParam("bloodPressure") String bP, @RequestParam("height") String height, @RequestParam("weight") Double weight) {
		PatientChart currentChart = this.appServ.find_current_chart(chartId);
		currentChart.setBloodPressure(bP);
		currentChart.setHeight(height);
		currentChart.setWeight(weight);
		this.appServ.save_new_chart(currentChart);
		return "redirect:/patient/chart/"+chartId;
	}
	//update the doc Notes
	@GetMapping("update/docNotes/{chart_id}")
	public String updtae_doc_notes(Model model, HttpSession session, @PathVariable("chart_id") Long chartId) {
		PatientChart currentChart = this.appServ.find_current_chart(chartId);
		model.addAttribute("currentChart", currentChart);
		return "update/docNotes.jsp";
	}
	//submit the docNotes
	@PutMapping("/submit/new/docNotes/{id}")
	public String submit_docNotes(@PathVariable("id") Long chartId, @Valid @ModelAttribute("currentChart") PatientChart currentChart, BindingResult result) {
		if(result.hasErrors()) {
			System.out.println(result);
			return "update/docNotes.jsp";
		}
		else {
			this.appServ.save_new_chart(currentChart);
			return "redirect:/patient/chart/"+chartId;
		}
		
	}
	//update Nurse Notes
	@GetMapping("/update/nurseNotes/{chart_id}")
	public String update_nurse_notes(Model model, @PathVariable("chart_id") Long charId) {
		PatientChart currentChart = this.appServ.find_current_chart(charId);
		model.addAttribute("currentChart", currentChart);
		return "update/nurseNotes.jsp";
	}
	
	//submit nurseNotes
	@PutMapping("/submit/new/nurseNotes/{id}")
	public String submit_nurseNotes(@PathVariable("id") Long chartId, @Valid @ModelAttribute("currentChart") PatientChart currentChart, BindingResult result) {
		if(result.hasErrors()) {
			return "update/nurseNotes.jsp";
		}
		else {
			this.appServ.save_new_chart(currentChart);
			return "redirect:/patient/chart/"+chartId;
		}
	}
	@GetMapping("/discharge/{id}")
	public String discharge_chart(@PathVariable("id") Long chartId) {
		PatientChart currentChart = this.appServ.find_current_chart(chartId);
		currentChart.setStatus("closed");
		this.appServ.save_new_chart(currentChart);
		return "redirect:/dashboard";
	}
	//view an old chart
	@GetMapping("/view/history/chart/{chart_id}")
	public String view_history_chart(Model model, @PathVariable("chart_id") Long charId) {
		PatientChart currentChart = this.appServ.find_current_chart(charId);
		model.addAttribute("currentChart", currentChart);
		return "historyChart.jsp";
	}
	
}
