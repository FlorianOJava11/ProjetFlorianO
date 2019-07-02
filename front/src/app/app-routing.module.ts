import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { ProjetsComponent } from './projets/projets.component';
import { NouveauProjetComponent } from './nouveau-projet/nouveau-projet.component';
import {CategorieComponent} from './categorie/categorie.component';
import { CommonModule } from '@angular/common';
import { ProjetComponent } from './projet/projet.component';
import {ContributionComponent} from './contribution/contribution.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'projets',
        component: ProjetsComponent
    },
    {
        path: 'projets/:id',
        component: ProjetComponent
    },

    {
        path: 'nouveau-projet', 
        component: NouveauProjetComponent
    },
    {
        path: 'categorie', 
        component: CategorieComponent
    },
    {
        path: 'contribution', 
        component: ContributionComponent
    },
    {
         path: 'contribution/:id', 
        component: ContributionComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    
];

@NgModule({
    declarations: [],
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
