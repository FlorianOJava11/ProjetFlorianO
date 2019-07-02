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


import com.joseway.ngspringsec.model.Projet;

import com.joseway.ngspringsec.services.ProjetService;

@RestController
@RequestMapping(value="/api/projets")
//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
@PreAuthorize("permitAll()")
public class ProjetControllerApi {

	@Autowired
	private ProjetService projetService;
	
	@GetMapping(value="/{projetId}")
	public Projet findById(@PathVariable("projetId")Long id) {
		Projet projet = projetService.findById(id);
		
		return projet;
	}
	@RequestMapping(value="/{id}/delete")
	public Projet deleteProjet(@PathVariable("id") Long id) {
		return projetService.deleteById(id);
	}
	
	@PostMapping(value="")
	public Projet save(@RequestBody Projet projet) {
		System.out.println("Saving... ");
		return projetService.save(projet);
	}
	
	@GetMapping(value="")
	public List<Projet> findAll(){
		return projetService.findAll();
	}
	
}

