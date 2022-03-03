package com.mulloy.emr_project.models;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="PatientCharts")
public class PatientChart {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@NotEmpty(message="patient name is required")
	private String patientName;
	
	private String chiefComplaint;
	
	private String status;
	@Column(name = "doc_notes", columnDefinition = "TEXT")
	private String docNotes;
	@Column(name = "nurse_notes", columnDefinition = "TEXT")
	private String nurseNotes;
	
	private String room;
	
	private String disposition;
	
	private Double weight;
	
	private String height;
	
	private String bloodPressure;
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
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="provider_id")
	private Provider aProvider;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="patient_id")
	private Patient aPatient;
	
	//============================
	public PatientChart() {}
	//============================
	//getter and setter
	//==========================
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getDocNotes() {
		return docNotes;
	}
	public void setDocNotes(String docNotes) {
		this.docNotes = docNotes;
	}
	public String getNurseNotes() {
		return nurseNotes;
	}
	public void setNurseNotes(String nurseNotes) {
		this.nurseNotes = nurseNotes;
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
	public Patient getaPatient() {
		return aPatient;
	}
	public void setaPatient(Patient aPatient) {
		this.aPatient = aPatient;
	}
	public Provider getaProvider() {
		return aProvider;
	}
	public void setaProvider(Provider aProvider) {
		this.aProvider = aProvider;
	}
	public String getChiefComplaint() {
		return chiefComplaint;
	}
	public void setChiefComplaint(String chiefComplaint) {
		this.chiefComplaint = chiefComplaint;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}
	public String getDisposition() {
		return disposition;
	}
	public void setDisposition(String disposition) {
		this.disposition = disposition;
	}
	public String getBloodPressure() {
		return bloodPressure;
	}
	public void setBloodPressure(String bloodPressure) {
		this.bloodPressure = bloodPressure;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	
	
	
	
	
	
	
	
	
	//Patient Name, Doc Notes, Nurse Notes, labs, imaging, visit date and time, discharge date and time 
}
