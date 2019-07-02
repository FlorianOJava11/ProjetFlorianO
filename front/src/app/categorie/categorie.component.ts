import { Component, OnInit } from '@angular/core';
import {Categorie} from '../models/categorie';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CategorieService} from '../services/categorie.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorieForm: FormGroup;
  categorie: Categorie[];
  constructor( private fb: FormBuilder, private categorieService: CategorieService) { }

  ngOnInit() {
    this.initCategorieForm();
    this.findAllCat();
  }
  initCategorieForm(){
    this.categorieForm = this.fb.group({
      titre: ['']
    })
  }
  
   findAllCat() {
    console.log('Categorie form values', this.categorieForm.value);
    return this.categorieService.findAllCat()
                .subscribe(res => {
                  console.log('Resultat:', res);
                  this.categorie = res;
                });
  }
  }

