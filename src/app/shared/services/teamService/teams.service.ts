import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get<Time>(`${environment.baseUrl}/${this.uri}`);
  }

  getTeamById(id: number) {
    console.log('id', id);
    return this.http.get<Time>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

}
