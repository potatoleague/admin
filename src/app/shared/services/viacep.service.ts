import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(
    private http: HttpClient
  ) { }

  getEndereco(cep: String) {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
