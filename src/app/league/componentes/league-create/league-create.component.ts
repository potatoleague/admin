import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeagueService } from 'src/app/shared/services/leagueService/league.service';

@Component({
  selector: 'app-league-create',
  templateUrl: './league-create.component.html',
  styleUrls: ['./league-create.component.scss']
})
export class LeagueCreateComponent implements OnInit {

  ligaForm!: FormGroup;

  disputa: any[] = [
    { id: 1, name: 'Mata-mata' },
    { id: 2, name: 'Pontos Corridos' },
    { id: 3, name: 'Misto' },
  ];
  tipo = ['Canindé', 'Futsal', 'Futebol de Areia'];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ligaService: LeagueService
  ) { }

  ngOnInit(): void {
    this.ligaForm = this.fb.group({
      name: [''],
      dt_ini: [''],
      dt_fim: [''],
      t_disputa: [''],
      t_campo: ['']
    });
  }

  createLeague(form: any) {
    console.log('nova-liga', form);

    this.router.navigate(['/painel-controle']);
  }

}
