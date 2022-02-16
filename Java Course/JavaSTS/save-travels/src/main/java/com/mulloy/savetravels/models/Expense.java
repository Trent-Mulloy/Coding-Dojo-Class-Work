package com.mulloy.savetravels.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="Expenses")
public class Expense {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @NotNull
	 @Size(min = 2, max = 200)
	 private String expense_name;
	 
	 @NotNull
	 @Size(min = 2, max = 200)
	 private String vendor_name;
	 
	 @NotNull
	 @Size(min = 2, max = 200)
	 private String description;
	 
	 @NotNull
	 @Min((long) 0.5)
	 private Double amount;
	 
	 @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;
	    
	 public Expense() {
		 
	 }
	 public Expense(String expense_name, String vendor_name, Double amount, String description) {
		 this.expense_name = expense_name;
		 this.vendor_name = vendor_name;
		 this.amount = amount;
		 this.description = description;
	 }
	 
	 	@PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getExpense_name() {
			return expense_name;
		}
		public void setExpense_name(String expense_name) {
			this.expense_name = expense_name;
		}
		public String getVendor_name() {
			return vendor_name;
		}
		public void setVendor_name(String vendor_name) {
			this.vendor_name = vendor_name;
		}
		public Double getAmount() {
			return amount;
		}
		public void setAmount(Double amount) {
			this.amount = amount;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		
	    
}
