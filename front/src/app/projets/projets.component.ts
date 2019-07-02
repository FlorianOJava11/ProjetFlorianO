import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ProjetsService} from '../services/projets.service';
import {Projet} from '../models/projet';
import { Categorie } from '../models/categorie';
import {CategorieService} from '../services/categorie.service';
import { Contribution } from '../models/contribution';
import { ContributionService } from '../services/contribution.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projetForm: FormGroup;
  projets: Projet[];
  categorieForm: FormGroup;
  categorie: Categorie[];
  contributionForm: FormGroup;
  contribution: Contribution[];
  constructor(
    private fb: FormBuilder, 
    private projetsService: ProjetsService, 
    private categorieService: CategorieService,
    private contributionService: ContributionService ) {}
   

  ngOnInit() {
    this.initProjetForm();
    this.findAll();
    this.findAllCat();
    this.findAllCont();
    this.findAllMontantCont();
  }
  initProjetForm(){
    this.projetForm = this.fb.group({
      titre: [''],
      description: [''],
      montantMinimum: [''],
      contribution: [''],
      montantContribution: [''],
      contact: [''],
      categorie: ['']
    })
  }
  
   findAll() {
   //console.log('Projet form values', this.projetForm.value);
    return this.projetsService.findAll()
                .subscribe(res => {
                  console.log('Resultat:', res);
                  this.projets = res;
                });
  }
 
                    
                      deleteProjet(id: number){
                        this.projetsService.delete(id)
                          .subscribe(res => {console.log('Delete projet: ', res);
                        this.findAll();
                        });
}
findAllCat() {
 //console.log('Categorie form values', this.categorieForm.value); 
  return this.categorieService.findAllCat()
              .subscribe(res => {
                console.log('Resultat:', res);
                this.categorie = res;
              });
}
findAllCont() {
 //console.log('Contribution form values', this.contributionForm.value);
  return this.contributionService.findAllCont()
              .subscribe(res => {
                console.log('Resultat:', res);
                this.contribution = res;
              });
}
findAllMontantCont(){
  

}
}
