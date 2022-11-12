
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
}
