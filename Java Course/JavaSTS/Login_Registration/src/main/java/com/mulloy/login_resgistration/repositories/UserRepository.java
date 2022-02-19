package com.mulloy.login_resgistration.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.login_resgistration.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	//magic jpa methods
	Optional<User> findByEmail(String email);
	

}
