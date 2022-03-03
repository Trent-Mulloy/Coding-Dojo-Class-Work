package com.mulloy.emr_project.repositories;



import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.emr_project.models.Patient;
import com.mulloy.emr_project.models.PatientChart;
import com.mulloy.emr_project.models.Provider;


@Repository
public interface PatientChartRepository extends CrudRepository<PatientChart, Long> {
	 List<PatientChart> findByStatus(String Status);
	 
	 List<PatientChart> findByaProviderAndStatus(Provider aProvider, String status);
	 
	 List<PatientChart> findByaPatientAndStatus(Patient aPatient, String status);
}
