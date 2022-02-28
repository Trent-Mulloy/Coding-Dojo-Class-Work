package com.mulloy.emr_project.repositories;

import java.util.Date;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.emr_project.models.Patient;


@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {

	Optional<Patient> findByFirstNameAndLastNameAndDateOfBirth(String firstName, String lastName, Date dateOfBirth);
}
