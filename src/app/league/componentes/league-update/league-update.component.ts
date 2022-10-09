import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-update',
  templateUrl: './league-update.component.html',
  styleUrls: ['./league-update.component.scss']
})
export class LeagueUpdateComponent implements OnInit {

  ligaForm!: FormGroup;

  disputa: any[] = [
    { id: 1, name: 'Mata-mata' },
    { id: 2, name: 'Pontos Corridos' },
    { id: 3, name: 'Misto' },
  ];
  tipo = ['Canindé', 'Futsal', 'Futebol de Areia'];

  constructor(
    private router: Router,
    private fb: FormBuilder
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
