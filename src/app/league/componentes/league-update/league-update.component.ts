import { LeagueService } from './../../../shared/services/leagueService/league.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
      dt_start: [''],
      dt_end: [''],
      system: [''],
      mode: ['']
    });

    this.getLeagueId();
  }

  getLeagueId() {
    this.leagueService.getLeagueById(this.id).subscribe({
      next: (data) => {
        this.ligaForm.patchValue({
          name: data.name,
          dt_start: data.dt_start,
          dt_end: data.dt_end,
          system: data.system,
          mode: data.mode
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
      next: (data) => {
        console.log('OI');
        this.router.navigate(['/painel-controle']);
      }, error: (err) => {
        console.log('err', err);
      }
    });
  }

  // formatDate(date: any) {
  //   let teste = date.getTime();
  //   console.log('teste', teste);
  // }
}
