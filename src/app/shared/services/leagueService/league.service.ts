import { Liga } from 'src/app/model/League/liga';
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

  getAllLeagues(): Observable<Liga[]> {
    return this.http.get<Liga[]>(`${environment.baseUrl}/${this.uri}`);
  }

  getLeagueById(id: number) {
    return this.http.get<Liga>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  updateLeague(id: number, form: Liga) {
    return this.http.put<Liga>(`${environment.baseUrl}/${this.uri}/${id}`, form);
  }

  createLeague(form: Liga) {
    return this.http.post<Liga>(`${environment.baseUrl}/${this.uri}`, form);
  }
}
