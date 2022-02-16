package com.mulloy.savetravels.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mulloy.savetravels.models.Expense;
import com.mulloy.savetravels.repositories.ExpenseRepository;
@Service
public class ExpenseService {
	
	private final ExpenseRepository expenseRepo;
	
	public ExpenseService(ExpenseRepository expenseRepo) {
	     this.expenseRepo = expenseRepo;
	 }
	
	public List<Expense> allExpenses() {
		 
	     return (List<Expense>)expenseRepo.findAll();
	 }
	
	public Expense new_expense(Expense expense) {
		return this.expenseRepo.save(expense);
		
	}
	
	public Expense one_expense(Long id) {
		return this.expenseRepo.findById(id).orElse(null);
	}
	
	public Expense update_expense(Expense expense) {
		return this.expenseRepo.save(expense);
	}
	
	public String delete_expense(Long id) {
		this.expenseRepo.deleteById(id);
		return "Success";
	}

}
