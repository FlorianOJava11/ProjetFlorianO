package com.joseway.ngspringsec.services;

import java.util.List;

import com.joseway.ngspringsec.model.Categorie;



public interface CategorieService {

	public List<Categorie> findAll();
	public Categorie findById(Long id);
	public Categorie deleteById(Long id);
	public Categorie save(Categorie categorie);
}
