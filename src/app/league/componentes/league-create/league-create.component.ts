import { Liga } from 'src/app/model/League/liga';
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
      dt_start: ['2022-01-01'],
      dt_end: ['2022-01-01'],
      system: [''],
      mode: ['']
    });
  }

  createLeague(form: any) {
    console.log('nova-liga', form);
    this.ligaService.createLeague(form).subscribe({
      next: (data: Liga) => {
        console.log('createLeague', data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    this.router.navigate(['/painel-controle']);
  }

}
