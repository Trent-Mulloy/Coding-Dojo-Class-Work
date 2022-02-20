package com.mulloy.book_club.services;

import java.util.List;
import java.util.Optional;


import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.mulloy.book_club.models.Book;
import com.mulloy.book_club.models.LoginUser;
import com.mulloy.book_club.models.User;
import com.mulloy.book_club.respoitories.BookRepository;
import com.mulloy.book_club.respoitories.UserRepository;

@Service
public class AppService {
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private BookRepository bookRepo;
	
	// Registers a new user 
    public User register(User newUser, BindingResult result) {
        
    	Optional<User> potentialUser = this.userRepo.findByEmail(newUser.getEmail());
    	if(potentialUser.isPresent()) {
    		//this means email is taken
    		result.rejectValue("email", "email taken", "This email already exists.");
    	}
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "passwords dont match", "The confrim password must match the password");
    	}
    	if(result.hasErrors()) {
    		return null;
    	}
    	else {
    		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    		newUser.setPassword(hashed);
    		return this.userRepo.save(newUser);
    		

    	}
    }
    //Login User and store ID in Session
    public User login(LoginUser newLoginObject, BindingResult result) {
        
    	System.out.println("Before");
    	Optional<User> potentialUser = this.userRepo.findByEmail(newLoginObject.getEmail());
    	System.out.println(potentialUser.isPresent());
    	if(!potentialUser.isPresent()) {
    		result.rejectValue("email", "user not found", "No User was found with this email.");
    	}
    	else {
	    	if(!BCrypt.checkpw(newLoginObject.getPassword(), potentialUser.get().getPassword())) {
	    		result.rejectValue("password", "Matches", "Invalid Password!");
	    		}
    	}
    	if(result.hasErrors()) {
    		return null;
    	}
    	else {
    		return potentialUser.get();
    	}

    }
    public User one_user(Long id) {
		return this.userRepo.findById(id).orElse(null);
	}
    
    //Get all Books
    public List<Book> getAllBooks(){
    	return (List<Book>)this.bookRepo.findAll();
    }
    public Book create_book(Book book) {
    	return this.bookRepo.save(book);
    }
    
    public Book one_book(Long id) {
    	return this.bookRepo.findById(id).orElse(null);
    }
}
    
  
