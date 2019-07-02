import { Injectable } from '@angular/core';
import {Projet} from '../models/projet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private projetUrl: string ='http://localhost:8080/api/projets'
  constructor(private http: HttpClient) { }

  findAll(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.projetUrl)
  }
  findById(id: number): Observable<Projet>{
    return this.http.get<Projet>(this.projetUrl + '/' + id);
  }
  save(projet: Projet) {
    return this.http.post<Projet>(this.projetUrl, projet);
  }
  delete(id : number): Observable<Projet>{
    return this.http.get<Projet>(`${this.projetUrl}/${id}/delete`)
  }
}
