import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ProjetsService} from '../services/projets.service';
import {Projet} from '../models/projet';
import {CategorieService} from '../services/categorie.service';
import {ContributionService} from '../services/contribution.service';
import {Contribution} from  '../models/contribution';
import {Categorie}from '../models/categorie';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.component.html',
  styleUrls: ['./nouveau-projet.component.css']
})
export class NouveauProjetComponent implements OnInit {
  projetForm: FormGroup;
  categorieForm: FormGroup;
  contributionForm: FormGroup;
  projets: Projet[];
  categorie: Categorie[];
  contribution: Contribution[];

  constructor(
    private fb: FormBuilder,
    private projetsService: ProjetsService,
    private categorieService: CategorieService,
    private contributionService: ContributionService,
    private route: Router
  ) { }

  ngOnInit() {
    this.initProjetForm();
    this.findAllCat();
    this.findAllCont();
  }
  initProjetForm(){
    this.projetForm = this.fb.group({
      titre: [''],
      description: [''],
      montantMinimum: [''],
      contributions: [''],
      contact: [''],
      categorie: ['']
    })
  }
  saveProjet(){
    console.log('Projet form values', this.projetForm.value);
    let p: Projet = this.projetForm.value;
    let c: Contribution[] = p.contributions;
    console.log(c);
    this.projetsService.save(this.projetForm.value)
                      .subscribe(res => {
                        console.log('New Projet:', res);
                        this.initProjetForm();
                        this.route.navigate(['/projets']);
                      });
}
findAllCat() {
  //console.log('Categorie form values', this.categorieForm.value);
  return this.categorieService.findAllCat()
              .subscribe(res => {
                console.log('Resultat:', res);
                this.categorie = res;console.log(this.categorie)
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

}
