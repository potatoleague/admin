import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Liga } from 'src/app/model/League/liga';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private uri: string = 'ligas';

  constructor(
    private http: HttpClient
  ) { }

  getAllLeagues() {
    return this.http.get<Liga>(`${environment.baseUrl}/${this.uri}`);
  }
  getLeagueById(id: number) {
    return this.http.get<Liga>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  updateLeague(id: number, form: Liga) {
    return this.http.put<Liga>(`${environment.baseUrl}/${this.uri}/${id}`, form);
  }
}
