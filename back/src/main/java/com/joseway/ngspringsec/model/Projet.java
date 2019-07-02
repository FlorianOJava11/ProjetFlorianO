package com.joseway.ngspringsec.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Projet {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String titre;
	private double montantMinimum;
	private String description;
	private String contact;
	private int montantContribution= 0;
	
	
	public int getMontantContribution() {
		return montantContribution;
	}

	public void setMontantContribution(int montantContribution) {
		this.montantContribution = montantContribution;
	}

	@ManyToOne(cascade=CascadeType.DETACH)
	@JoinColumn(name="categorie")
	private Categorie categorie;
	
	@ManyToOne(cascade=CascadeType.DETACH)
	private Contribution contributions;
		
	public Projet() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public double getMontantMinimum() {
		return montantMinimum;
	}

	public void setMontantMinimum(double montantMinimum) {
		this.montantMinimum = montantMinimum;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}

	public Contribution getContributions() {
		return contributions;
	}

	public void setContributions(Contribution contributions) {
		this.contributions = contributions;
	}

	

}

	