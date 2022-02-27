package com.mulloy.emr_project.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.emr_project.models.Provider;

@Repository
public interface ProviderRepository extends CrudRepository<Provider, Long> {
	
	Optional<Provider> findByUserName(String userName);

}
