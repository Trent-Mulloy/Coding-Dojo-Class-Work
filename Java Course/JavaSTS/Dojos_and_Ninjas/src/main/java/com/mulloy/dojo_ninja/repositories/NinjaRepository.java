package com.mulloy.dojo_ninja.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.dojo_ninja.models.Ninja;


@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {

}
