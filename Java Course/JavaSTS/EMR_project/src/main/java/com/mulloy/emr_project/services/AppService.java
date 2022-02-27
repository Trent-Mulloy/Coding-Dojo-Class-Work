package com.mulloy.emr_project.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.mulloy.emr_project.models.LoginProvider;
import com.mulloy.emr_project.models.Provider;
import com.mulloy.emr_project.repositories.ProviderRepository;

@Service
public class AppService {

	@Autowired
	private ProviderRepository providerRepo;
	
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
	public Provider update_provider(Provider provider) {
		return this.providerRepo.save(provider); 
	}

}
