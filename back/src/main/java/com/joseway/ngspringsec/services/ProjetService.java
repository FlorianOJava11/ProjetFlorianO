package com.joseway.ngspringsec.services;

import java.util.List;

import com.joseway.ngspringsec.model.Projet;


public interface ProjetService {

	public List<Projet> findAll();
	public Projet findById(Long id);
	public Projet deleteById(Long id);
	public Projet save(Projet projet);
	
}
