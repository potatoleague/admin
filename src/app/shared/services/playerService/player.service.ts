
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private uri: string = 'atletas';

  constructor(
    private http: HttpClient
  ) { }

  getAllPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/${this.uri}`);
  }

  getPlayerById(id: number) {
    console.log('id??', id)
    return this.http.get<any>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  createPlayer(form: any) {
    return this.http.post<any>(`${environment.baseUrl}/${this.uri}`, form);
  }

  updatePlayer(id: number, form: any) {
    return this.http.put<any>(`${environment.baseUrl}/${this.uri}/${id}`, form);
  }
}
