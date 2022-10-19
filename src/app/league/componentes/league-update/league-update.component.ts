import { LeagueService } from './../../../shared/services/leagueService/league.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Liga } from 'src/app/model/League/liga';

@Component({
  selector: 'app-league-update',
  templateUrl: './league-update.component.html',
  styleUrls: ['./league-update.component.scss']
})
export class LeagueUpdateComponent implements OnInit {

  ligaForm!: FormGroup;
  id: number = 0;

  disputa: any[] = [
    { id: 1, name: 'Mata-mata' },
    { id: 2, name: 'Pontos Corridos' },
    { id: 3, name: 'Misto' },
  ];
  tipo = ['Canindé', 'Futsal', 'Futebol de Areia'];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private leagueService: LeagueService,
    private actvRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actvRouter.params.subscribe((res) => {
      this.id = res["id"];
    });

    this.ligaForm = this.fb.group({
      name: [''],
      dt_inicio: [''],
      dt_fim: [''],
      type_liga: [''],
      type_campo: ['']
    });

    this.getLeagueId();
  }

  getLeagueId() {
    this.leagueService.getLeagueById(this.id).subscribe({
      next: (data: Liga) => {
        this.ligaForm.patchValue({
          name: data.name,
          dt_inicio: this.formatDate(data.dt_inicio),
          dt_fim: this.formatDate(data.dt_fim),
          type_liga: data.type_liga,
          type_campo: data.type_campo
        });
        console.log('getLeagueId', data);
      },
      error: (err) => {
        console.log('Err', err);
      }
    });
  }

  createLeague(form: any) {
    console.log('nova-liga', form);
    this.leagueService.updateLeague(this.id, form).subscribe({
      next: (data: Liga) => {
        console.log('OI');
        this.router.navigate(['/painel-controle']);
      }, error: (err) => {
        console.log('err', err);
      }
    });
  }

  formatDate(date: any) {
    let teste = date.getTime();
    console.log('teste', teste);
  }
}
