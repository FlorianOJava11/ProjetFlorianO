import {Contribution} from "./contribution";
import { Categorie } from "./categorie";
export class Projet{
    id: number;
    titre: string;
    description: string;
    montantMinimum: number;
    contact: string;
    contributions: Contribution[];
    montantContribution: number;
    categorie: Categorie;
}