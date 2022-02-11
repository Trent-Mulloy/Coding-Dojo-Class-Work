package com.mulloy.careSoft;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {

public Physician(int id) {
		super(id);
		// TODO Auto-generated constructor stub
	}

//... imports class definition...
    
    // Inside class:    
    private ArrayList<String> patientNotes;
	
    public boolean assignPin(int pin) {   
    	String x = String.valueOf(pin);
    	if(x == "4") {
    		this.pin = pin;
    		return true;
    	}
    	else return false;
    	
    }
    
    public boolean accessAuthorized(Integer confirmedAuthID) {
    	if(confirmedAuthID == this.id) {
    		return true;
    	}
    	else return false;
    }
    // TO DO: Implement HIPAACompliantUser!
	
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
	
    
    // TO DO: Setters & Getters
}
