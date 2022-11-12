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
    return this.http.get<any>(`${environment.baseUrl}/${this.uri}`);
  }

  getTeamById(id: number) {
    return this.http.get<any[]>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  createTeam(form: any) {
    console.log('FORM CREATE', form);
    return this.http.post<any>(`${environment.baseUrl}/${this.uri}`, form);
  }

  updateTeam(id: number, form: any) {
    console.log('url ID', id)
    return this.http.put<any>(`${environment.baseUrl}/${this.uri}/${id}`, form);
  }

}
