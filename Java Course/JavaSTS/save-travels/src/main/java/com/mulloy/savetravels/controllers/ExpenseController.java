package com.mulloy.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
	
//	@RequestMapping("/expense/{id}/edit")
//	public String edit_expense(@PathVariable("id") Long id, Model model) {
//		
//		
//		
//		return "";
//	}
	
	@RequestMapping("/expense/{id}/edit")
	public String edit_expense(@PathVariable("id") Long id, Model model) {
		Expense expense = this.expenseServ.one_expense(id);
		model.addAttribute("expense", expense);
		model.addAttribute("expenseitem", new Expense());
		return "edit.jsp";
	}
	
	@RequestMapping(value="/edit/expense/{id}", method=RequestMethod.PUT)
	public String update_expense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		else {
			this.expenseServ.update_expense(expense);
			return "redirect:/";
		}
	}
	@RequestMapping("/expense/{id}")
	public String view_expense(@PathVariable("id") Long id, Model model) {
		Expense expense = this.expenseServ.one_expense(id);
		model.addAttribute("expense", expense);
		model.addAttribute("expenseitem", new Expense());
		return "view_expense.jsp";
	
	}
	
	@RequestMapping(value="/expense/{id}/delete", method=RequestMethod.DELETE)
	public String delete(@PathVariable("id") Long id) {
		this.expenseServ.delete_expense(id);
		return "redirect:/";
	}
	
	}

