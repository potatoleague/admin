import { Atleta } from "../Player/Player";

export interface Equipe {
  id?: number;
  name: string;
  apelido: string;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  complemento: string;
  cidade: string;
  uf: string;
  presidente: string;
  status: boolean;
  atletas: Atleta[];
}
