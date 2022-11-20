import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreeService {

  private uri: string = 'arbitros';

  constructor(
    private http: HttpClient
  ) { }

  getAllRefrees() {
    return this.http.get<any[]>(`${environment.baseUrl}/${this.uri}`);
  }

  getRefreeById(id: Number) {
    return this.http.get<any>(`${environment.baseUrl}/${this.uri}/${id}`);
  }

  createRefree(form: any) {
    return this.http.post<any>(`${environment.baseUrl}/${this.uri}`, form);
  }

  updateRefree(id: number, form: any) {
    return this.http.put<any>(`${environment.baseUrl}/${this.uri}/${id}`, form);
  }
}
