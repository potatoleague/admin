import { Atleta } from "../Player/Player"

export interface Equipe {
  id?: number,
	name: string,
	initials: string,
	president: string,
	cep: string,
	logradouro: string,
	numero: number,
	bairro: string,
	complemento: string,
	cidade: string,
	uf: string,
	img_scudo: string,
	img_stadium: string,
	phone: string,
	status: string,
	surname: string,
	dt_nascimento: Date,
  leagues: number,
  atletas: Atleta[],
}
