import { Component, OnInit } from '@angular/core';
import {Contribution} from '../models/contribution';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ContributionService} from '../services/contribution.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ProjetsService } from '../services/projets.service';
import { Projet } from '../models/projet';


@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {
 
  contribution: Contribution[];
  ct: Contribution;
  projet: Projet;
  id: number;
  projetId: number;

  constructor( private fb: FormBuilder, private contributionService: ContributionService, private router: ActivatedRoute, private route: Router, private projetsService: ProjetsService) { }
 

  ngOnInit() {
    this.router.paramMap.subscribe(res => {this.id= +res.get('id')});
    this.findById(this.id);
    
    
  }

  saveMontantCont(value: number) {
    console.log('Contribution form values', value);
    this.projet.montantContribution= + this.projet.montantContribution + + value;
  this.projetsService.save(this.projet).subscribe(res =>{
    this.projet=res; this.route.navigate(['/home'])
  });
}
findById(pid: number){
  this.projetsService.findById(pid)
        .subscribe(res => {
          this.projet = res;
         
        });
}

  }


