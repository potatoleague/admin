import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private uri: string = 'ligas';

  constructor(
    private http: HttpClient
  ) { }

  getAllLeagues(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/${this.uri}`);
  }

  getLeagueById(id: number) {
    return this.http.get<any>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  updateLeague(id: number, form: any) {
    return this.http.put<any>(`${environment.baseUrl}/${this.uri}/${id}`, form);
  }

  createLeague(form: any) {
    return this.http.post<any>(`${environment.baseUrl}/${this.uri}`, form);
  }
}
