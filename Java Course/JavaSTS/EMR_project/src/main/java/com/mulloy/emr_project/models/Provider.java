package com.mulloy.emr_project.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="providers")
public class Provider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Type is required")
	@Size(min=2, max=100,message="Type must be between 2 and 100 charecters")
	private String type;
	
	@NotEmpty(message="First Name Required")
	@Size(min=2, max=30, message="First Name must be between 2 and 30 charecters long.")
	private String firstName;
	
	@NotEmpty(message="Last Name Required")
	@Size(min=2, max=30, message="Last Name must be between 2 and 30 charecters long.")
	private String lastName;
	
	@NotEmpty
	@Size(min=5, max=20, message="UserName must be between 5 and 20 charecters")
	private String userName;
	
	@NotEmpty(message="Password is required!")
	@Size(min=6, max=100, message="Password must be between 6 and 100 charecters")
	private String password;
	
	@Transient
	@NotEmpty(message="Confirm Password is required!")
	@Size(min=6, max=100, message="Confirm password must be between 6 and 100 charecters")
	private String confirmPassword;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	@OneToMany(mappedBy="aProvider", fetch=FetchType.LAZY)
	private List<PatientChart> patientCharts;
	//==============================
	//Constructors
	//=============================
	//empty
	public Provider() {
		
	}
	//loaded
	public Provider(String type, String firstName, String lastName, String userName, String password, String confirmPassword) {
		this.type = type;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	//=============================
	//getters and setters
	//=============================
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	

}
