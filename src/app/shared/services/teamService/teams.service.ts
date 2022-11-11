import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'src/app/model/Teams/Time';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private uri: string = 'times';

  constructor(
    private http: HttpClient
  ) { }

  getAllTeams() {
    return this.http.get<Equipe>(`${environment.baseUrl}/${this.uri}`);
  }

  getTeamById(id: number) {
    return this.http.get<Equipe>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  createTeam(form: Equipe) {
    return this.http.post<Equipe>(`${environment.baseUrl}/${this.uri}`, form);
  }

}
