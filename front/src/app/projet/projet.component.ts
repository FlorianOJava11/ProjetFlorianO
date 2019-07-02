import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ProjetsService} from '../services/projets.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Categorie} from '../models/categorie';
import {Contribution} from '../models/contribution';
import {ContributionService} from '../services/contribution.service';
import {CategorieService} from '../services/categorie.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
ProjetId: number;
projet: Projet;
contribution: Contribution[];
categorie: Categorie[];
ProjetEditForm: FormGroup;
  constructor(private pj: ProjetsService,
              private cs: CategorieService,
              private ct: ContributionService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router ) { }

  ngOnInit() {
    this.router.paramMap
        .subscribe(res => {
          this.ProjetId = +res.get('id');
          this.findById(this.ProjetId);
         
          console.log("Param Map", res);
          this.findAllCat();
          this.findAllCont();
        })
       
  }
  initProjetEditForm(){
    this.ProjetEditForm = this.fb.group({
      titre: [this.projet.titre],
      description: [this.projet.description],
      montantMinimum: [this.projet.montantMinimum],
      contribution: [this.projet.contributions],
      contact: [this.projet.contact],
      categorie: [this.projet.categorie]
    });
  }
  findById(pid: number){
    this.pj.findById(pid)
          .subscribe(res => {
            this.projet = res;
            this.initProjetEditForm();
          });
  }



  updateProjet(){
    let p = Object.assign({}, this.projet, this.ProjetEditForm.value);
    this.pj.save(p).subscribe(res => {
      this.projet = res;
      this.initProjetEditForm();
      this.route.navigate(['/projets']);
      this.findAllCat();
      this.findAllCont();
    });
    console.log("Edit projet info: ", this.ProjetEditForm.value);
  }
  findAllCat() {
    //console.log('Categorie form values', this.categorieForm.value);
    return this.cs.findAllCat()
                .subscribe(res => {
                  console.log('Resultat:', res);
                  this.categorie = res;console.log(this.categorie)
                });
  }
  findAllCont() {
    //console.log('Contribution form values', this.contributionForm.value);
    return this.ct.findAllCont()
                .subscribe(res => {
                  console.log('Resultat:', res);
                  this.contribution = res;
                });
  }





}
