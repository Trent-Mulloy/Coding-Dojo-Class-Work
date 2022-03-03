package com.mulloy.emr_project.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.mulloy.emr_project.models.LoginProvider;
import com.mulloy.emr_project.models.Patient;
import com.mulloy.emr_project.models.PatientChart;
import com.mulloy.emr_project.models.Provider;
import com.mulloy.emr_project.repositories.PatientChartRepository;
import com.mulloy.emr_project.repositories.PatientRepository;
import com.mulloy.emr_project.repositories.ProviderRepository;

@Service
public class AppService {

	@Autowired
	private ProviderRepository providerRepo;
	@Autowired
	private PatientRepository patientRepo;
	@Autowired
	private PatientChartRepository chartRepo;
	
	public Provider register(Provider newProvider, BindingResult result) {
		Optional<Provider> potentialProvider = this.providerRepo.findByUserName(newProvider.getUserName());
		if(potentialProvider.isPresent()) {
			result.rejectValue("userName", "Username already exists", "UserName is taken");
		}
		if(!newProvider.getPassword().equals(newProvider.getConfirmPassword())) {
			result.rejectValue("confirmPassword", "No Matchy", "Confirm Password must match Password");
		}
		if(result.hasErrors()) {
			return null;
		}
		else {
			String hashed = BCrypt.hashpw(newProvider.getPassword(), BCrypt.gensalt());
			newProvider.setPassword(hashed);
			return this.providerRepo.save(newProvider);
		}
	}
	
	public Provider login(LoginProvider newLoginObj, BindingResult result) {
		Optional<Provider> potentialProvider = this.providerRepo.findByUserName(newLoginObj.getUserName());
		if(!potentialProvider.isPresent()) {
			result.rejectValue("userName", "not found", "NO USER FOUND WITH THAT USERNAME");
		}
		else {
			if(!BCrypt.checkpw(newLoginObj.getPassword(), potentialProvider.get().getPassword())) {
				result.rejectValue("password", "invalid", "Invalid Password");
			}
		}
		if(result.hasErrors()) {
			return null;
		}
		else {
			return potentialProvider.get();
		}
	}
	
	public Provider one_provider(Long id) {
		return this.providerRepo.findById(id).orElse(null);
	}
	public void update_provider(Provider providerToEdit, String newPassword) {
		String hashed = BCrypt.hashpw(newPassword, BCrypt.gensalt());
		providerToEdit.setPassword(hashed);
		providerToEdit.setConfirmPassword(newPassword);
		this.providerRepo.save(providerToEdit);
	}
	public Optional<Patient> find_patient(String firstName, String lastName, Date dateOfBirth) {
		Optional<Patient> potentialPatient = this.patientRepo.findByFirstNameAndLastNameAndDateOfBirth(firstName, lastName, dateOfBirth);
		return potentialPatient;
	}
	public Patient find_one_patient(Long id) {
		return this.patientRepo.findById(id).orElse(null);
	}
	public Patient register_patient(Patient patient) {
		return this.patientRepo.save(patient);
	}
	
	public PatientChart save_new_chart(PatientChart newChart) {
		return this.chartRepo.save(newChart);
	}
	public List<PatientChart> all_charts(){
		return this.chartRepo.findByStatus("open");
	}
	public List<PatientChart> charts_by_provider(Provider aProvider){
		return this.chartRepo.findByaProviderAndStatus(aProvider, "open");
	}
	public PatientChart find_current_chart(Long id) {
		return this.chartRepo.findById(id).orElse(null);
	}
	public List<PatientChart> history_charts(Patient aPatient){
		return this.chartRepo.findByaPatientAndStatus(aPatient, "closed");
	}
	
}
