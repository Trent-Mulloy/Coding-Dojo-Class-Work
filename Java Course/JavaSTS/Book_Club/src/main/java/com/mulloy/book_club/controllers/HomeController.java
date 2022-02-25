package com.mulloy.book_club.controllers;



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
import org.springframework.web.bind.annotation.RequestMapping;

import com.mulloy.book_club.models.Book;
import com.mulloy.book_club.models.LoginUser;
import com.mulloy.book_club.models.User;
import com.mulloy.book_club.services.AppService;


//.. don't forget to inlcude all your imports! ..

@Controller
public class HomeController {
 
 // Add once service is implemented:
  @Autowired
  private AppService appServ;
 
 @GetMapping("/")
 public String index(Model model) {
 
     // Bind empty User and LoginUser objects to the JSP
     // to capture the form input
     model.addAttribute("newUser", new User());
     model.addAttribute("newLogin", new LoginUser());
     return "index.jsp";
 }
 
 @PostMapping("/register")
 public String register(@Valid @ModelAttribute("newUser") User newUser, 
         BindingResult result, Model model, HttpSession session) {
     
     // TO-DO Later -- call a register method in the service
	 User user = appServ.register(newUser, result);
     
     if(result.hasErrors()) {
         // Be sure to send in the empty LoginUser before 
         // re-rendering the page.
         model.addAttribute("newLogin", new LoginUser());
         return "index.jsp";
     }
     
     // No errors! 
     // TO-DO Later: Store their ID from the DB in session, 
     // in other words, log them in.
     session.setAttribute("sessionId", user.getId());
     return "redirect:/home";
 }
 
 @PostMapping("/login")
 public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
         BindingResult result, Model model, HttpSession session) {
     // Add once service is implemented:
      User user = appServ.login(newLogin, result);
     if(result.hasErrors()) {
         model.addAttribute("newUser", new User());
         return "index.jsp";
     }
 
     // No errors! 
     // TO-DO Later: Store their ID from the DB in session, 
     session.setAttribute("sessionId", user.getId());
 
     return "redirect:/home";
 }
 
 @RequestMapping("/home")
 public String home(HttpSession session, Model model, Book book) {
	 if(session.getAttribute("sessionId") == null) {
		 return "redirect:/";
	 }
	 else {
		Long userId = (Long) session.getAttribute("sessionId");
		model.addAttribute("user", this.appServ.one_user(userId));
		model.addAttribute("book_list", this.appServ.getAllBooks());
		 return "home.jsp";
	 	}
	 }
 @RequestMapping("/logout")
 public String logout(HttpSession session) {
	 session.invalidate();
	 return "redirect:/";
 }
 @RequestMapping("/add/book")
 public String add_book(Model model) {
	 model.addAttribute("newBook", new Book());
	 return "new_book.jsp";
 }
 @PostMapping("/create/book")
	public String createBook(@Valid @ModelAttribute("newBook") Book book, BindingResult result, HttpSession session, Model model) {
		if(result.hasErrors()) {
			return "new_book.jsp";
		}
		else {
			book.setUser(this.appServ.one_user((Long) session.getAttribute("sessionId")));
			this.appServ.create_book(book);
			return "redirect:/home";
		}
}
 @RequestMapping("/book/{book_id}")
 public String one_book(Model model, @PathVariable("book_id") Long id, HttpSession session) {
	 Book book = this.appServ.one_book(id);
	 User user = this.appServ.one_user((Long) session.getAttribute("sessionId"));
	 model.addAttribute("suser", user);
	 model.addAttribute("book", book);
	 return "book.jsp";
 }
 @RequestMapping("/edit/book/{book_id}")
 public String edit_book(Model model, @PathVariable("book_id") Long id) {
	 Book bookToEdit = this.appServ.one_book(id);
	 model.addAttribute("bookToEdit", bookToEdit);
	 return "edit_book.jsp";
 }
 @PutMapping("/update/book/{id}")
	public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("bookToEdit") Book bookToEdit, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			
			return "edit_book.jsp";
		}else { 
			bookToEdit.setUser(this.appServ.one_user((Long) session.getAttribute("sessionId")));
			this.appServ.update_book(bookToEdit);
			return "redirect:/home";
		}
		
	}
 @RequestMapping("/like/book/{book_id}")
 public String like_book(@PathVariable("book_id") Long bookId, HttpSession session) {
	 Long user_id = (Long) session.getAttribute("sessionId");
//	 Book bookToLike = this.appServ.one_book(bookId);
	 this.appServ.like_book(bookId, user_id);
	 return "redirect:/home";
 }
}

