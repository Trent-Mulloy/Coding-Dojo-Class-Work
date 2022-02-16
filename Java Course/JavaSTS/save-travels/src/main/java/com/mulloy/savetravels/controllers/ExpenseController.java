package com.mulloy.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mulloy.savetravels.models.Expense;
import com.mulloy.savetravels.services.ExpenseService;

@Controller
public class ExpenseController {
	
	private final ExpenseService expenseServ;
	
	public ExpenseController(ExpenseService expenseServ) {
	     this.expenseServ = expenseServ;
	 }
	
	
	
	@RequestMapping("/")
	public String index(Model model) {
		List<Expense> expense_list = this.expenseServ.allExpenses();
		model.addAttribute("expense_list", expense_list);
		
		model.addAttribute("expenseitem", new Expense());
		return "index.jsp";
	}
	

	@PostMapping("/submit")
	public String new_expense(@Valid @ModelAttribute ("expenseitem") Expense expenseitem, BindingResult result, Model model) {
		
		if (result.hasErrors()) {
			List<Expense> expense_list = this.expenseServ.allExpenses();
			model.addAttribute("expense_list", expense_list);
			
			return "index.jsp";
		}
		else {
			expenseServ.new_expense(expenseitem);
			return "redirect:/";
		}
		
	}

}

