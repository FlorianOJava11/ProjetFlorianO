package com.joseway.ngspringsec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joseway.ngspringsec.model.Categorie;
import com.joseway.ngspringsec.services.CategorieService;


@RestController
@RequestMapping(value="/api/categorie")
//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
@PreAuthorize("permitAll()")

public class CategorieControllerApi {

	@Autowired
	private CategorieService categorieService;
	
	@GetMapping(value="/{contributionId}")
	public Categorie findById(@PathVariable("categorieId")Long id) {
		Categorie categorie = categorieService.findById(id);
		
		return categorie;
	}
	@RequestMapping(value="/{id}/delete")
	public Categorie deleteProjet(@PathVariable("id") Long id) {
		return categorieService.deleteById(id);
	}
	
	@PostMapping(value="")
	public Categorie save(@RequestBody Categorie categorie) {
		System.out.println("Saving... ");
		return categorieService.save(categorie);
	}
	
	@GetMapping(value="")
	public List<Categorie> findAll(){
		return categorieService.findAll();
	}
	
}
