import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Times } from 'src/app/model/Player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private uri: string = 'times';

  constructor(
    private http: HttpClient
  ) { }

  getAllPlayers() {
    return this.http.get<Times>(`${environment.baseUrl}/${this.uri}`);
  }
}
