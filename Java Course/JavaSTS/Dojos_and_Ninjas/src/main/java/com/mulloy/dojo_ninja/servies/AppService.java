package com.mulloy.dojo_ninja.servies;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mulloy.dojo_ninja.models.Dojo;
import com.mulloy.dojo_ninja.models.Ninja;
import com.mulloy.dojo_ninja.repositories.DojoRepository;
import com.mulloy.dojo_ninja.repositories.NinjaRepository;

@Service
public class AppService {
	
	private final DojoRepository dojoRepo;
	private final NinjaRepository ninjaRepo;
	
	
	public AppService(DojoRepository dojoRepo, NinjaRepository ninjaRepo) {
		super();
		this.dojoRepo = dojoRepo;
		this.ninjaRepo = ninjaRepo;
	}
	
	//Create dojo
	public Dojo create_dojo(Dojo dojo) {
		return this.dojoRepo.save(dojo);
	}
	// Create Ninja
	public Ninja create_ninja(Ninja ninja) {
		return this.ninjaRepo.save(ninja);
	}
	
	//get all the dojos
	public List<Dojo> getAllDojos(){
		return (List<Dojo>)this.dojoRepo.findAll();
	}
	//get dojo by ID
	public Dojo getOneDojo(Long id) {
		return this.dojoRepo.findById(id).orElse(null);
	}

}
