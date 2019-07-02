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
import com.joseway.ngspringsec.model.Contribution;
import com.joseway.ngspringsec.services.ContributionService;


@RestController
@RequestMapping(value="/api/contribution")
//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
@PreAuthorize("permitAll()")
public class ContributionControllerApi {

	@Autowired
	private ContributionService contributionService;
	
	@GetMapping(value="/{contributionId}")
	public Contribution findById(@PathVariable("contributionId")Long id) {
		Contribution contribution = contributionService.findById(id);
		
		return contribution;
	}
	@RequestMapping(value="/{id}/delete")
	public Contribution deleteProjet(@PathVariable("id") Long id) {
		return contributionService.deleteById(id);
	}
	
	@PostMapping(value="")
	public Contribution save(@RequestBody Contribution contribution) {
		System.out.println("Saving... ");
		return contributionService.save(contribution);
	}
	
	@GetMapping(value="")
	public List<Contribution> findAll(){
		return contributionService.findAll();
	}
	
}
