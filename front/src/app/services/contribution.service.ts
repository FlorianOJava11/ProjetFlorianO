import { Injectable } from '@angular/core';
import { Contribution } from '../models/contribution';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  private contributionUrl: string ='http://localhost:8080/api/contribution'
 constructor(private http: HttpClient) { }

 findAllCont(): Observable<Contribution[]> {
  return this.http.get<Contribution[]>(this.contributionUrl)
}
findByIdCont(id: number): Observable<Contribution>{
  return this.http.get<Contribution>(this.contributionUrl + '/' + id);
}
saveCont(contribution: Contribution) {
  return this.http.post<Contribution>(this.contributionUrl, contribution);
}
saveMontantCont(contribution: Contribution) {
  return this.http.post<Contribution>(this.contributionUrl, contribution);
}
findAllMontantCont(): Observable<Contribution[]> {
  return this.http.get<Contribution[]>(this.contributionUrl)
}
}
