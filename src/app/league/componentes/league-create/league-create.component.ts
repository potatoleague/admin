import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
      dt_start: [''],
      dt_end: [''],
      league_system: [''],
      league_mode: ['']
    });
  }

  createLeague(form: any) {
    let obj: any = {
      ...form, status: true
    }
    console.log('nova-liga', obj);
    this.ligaService.createLeague(obj).subscribe({
      next: (data) => {
        console.log('createLeague', data);
        this.router.navigate(['/painel-controle']);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

}
