package com.joseway.ngspringsec;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.joseway.ngspringsec.model.Categorie;
import com.joseway.ngspringsec.model.Contribution;
import com.joseway.ngspringsec.model.Role;
import com.joseway.ngspringsec.model.RoleName;
import com.joseway.ngspringsec.model.User;
import com.joseway.ngspringsec.repository.CategorieRepository;
import com.joseway.ngspringsec.repository.ContributionRepository;
import com.joseway.ngspringsec.repository.RoleRepository;
import com.joseway.ngspringsec.repository.UserRepository;

@SpringBootApplication
public class SpringBootJwtAuthenticationApplication implements CommandLineRunner{
	
	
	@Autowired
	private ContributionRepository contributionRepository;
	@Autowired
	private CategorieRepository categorieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJwtAuthenticationApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		User u1 = new User();
		u1.setEmail("patrick@adaming.com");
		u1.setName("Patrick");
		u1.setPassword(encoder.encode("Password1"));
		u1.setUsername("patrick");
		createUser(u1, RoleName.ROLE_ADMIN);
		
		User u2 = new User();
		u2.setEmail("alice@adaming.com");
		u2.setName("Alice");
		u2.setPassword(encoder.encode("Password1"));
		u2.setUsername("alice");
		createUser(u2, RoleName.ROLE_PM);
		
		User u3 = new User();
		u3.setEmail("valentine@adaming.com");
		u3.setName("Valentine");
		u3.setPassword(encoder.encode("Password1"));
		u3.setUsername("valentine");
		createUser(u3, RoleName.ROLE_ADMIN);
		
		
		Categorie cat1 = new Categorie();
		cat1.setNom("Environnement");
		cat1 = categorieRepository.save(cat1);
		Categorie cat2 = new Categorie();
		cat2.setNom("Sport");
		cat2 = categorieRepository.save(cat2);
		Categorie cat3 = new Categorie();
		cat3.setNom("Politique/Droit");
		cat3 = categorieRepository.save(cat3);
		Categorie cat4 = new Categorie();
		cat4.setNom("Litterature");
		cat4 = categorieRepository.save(cat4);
		Categorie cat5 = new Categorie();
		cat5.setNom("Histoire/Patrimoine");
		cat5 = categorieRepository.save(cat5);
		Categorie cat6 = new Categorie();
		cat6.setNom("Economie");
		cat6 = categorieRepository.save(cat6);
		Categorie cat7 = new Categorie();
		cat7.setNom("Sciences Humaines");
		cat7 = categorieRepository.save(cat7);
		Categorie cat8 = new Categorie();
		cat8.setNom("Technologie");
		cat8 = categorieRepository.save(cat8);
		Categorie cat9 = new Categorie();
		cat9.setNom("Bien être/Santé");
		cat9 = categorieRepository.save(cat9);
		Categorie cat10 = new Categorie();
		cat10.setNom("Musique");
		cat10 = categorieRepository.save(cat10);
		Categorie cat11 = new Categorie();
		cat11.setNom("Voyage");
		cat11 = categorieRepository.save(cat11);
		Categorie cat12 = new Categorie();
		cat12.setNom("Création Entreprise");
		cat12 = categorieRepository.save(cat12);
		Categorie cat13 = new Categorie();
		cat13.setNom("Soutien aux Particuliers");
		cat13 = categorieRepository.save(cat13);
		Categorie cat14 = new Categorie();
		cat14.setNom("Social/Rencontres/Evenements");
		cat14 = categorieRepository.save(cat14);
		Categorie cat15 = new Categorie();
		cat15.setNom("Mode/Design");
		cat15 = categorieRepository.save(cat15);
		
		Contribution cont1 = new Contribution();
		cont1.setType("Don");
		cont1 = contributionRepository.save(cont1);
		Contribution cont2 = new Contribution();
		cont2.setType("Prêt avec contrepartie");
		cont1 = contributionRepository.save(cont2);
		Contribution cont3 = new Contribution();
		cont3.setType("Prêt sans contrepartie");
		cont1 = contributionRepository.save(cont3);
		
		
		
		
		
	}
	private User createUser(User user, RoleName roleName) {
		if(userRepository.existsByUsername(user.getUsername())) {
			System.out.println(user.getUsername() + " already exists. Nothing to do");
		}else {
			Set<Role> roles = new HashSet<>();
			Role role = roleRepository.findByName(roleName).get();
			roles.add(role);
			user.setRoles(roles);
			user = userRepository.save(user);
		}
		return user;
	}
}
