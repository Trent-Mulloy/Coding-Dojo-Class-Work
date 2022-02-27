package com.mulloy.emr_project.models;

import javax.validation.constraints.NotEmpty;

public class LoginProvider {

	@NotEmpty(message="UserName is required")
	private String userName;
	
	@NotEmpty(message="Password is required!")
	private String password;
	
	public LoginProvider() {}

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
	
	

}
