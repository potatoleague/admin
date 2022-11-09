import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'src/app/model/Teams/Time';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private uri: string = 'atletas';

  constructor(
    private http: HttpClient
  ) { }

  getAllPlayers() {
    return this.http.get<Equipe>(`${environment.baseUrl}/${this.uri}`);
  }
}
