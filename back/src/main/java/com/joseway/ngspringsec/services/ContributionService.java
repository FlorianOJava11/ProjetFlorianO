package com.joseway.ngspringsec.services;

import java.util.List;

import com.joseway.ngspringsec.model.Contribution;


public interface ContributionService {

	public List<Contribution> findAll();
	public Contribution findById(Long id);
	public Contribution deleteById(Long id);
	public Contribution save(Contribution contribution);
	
}
