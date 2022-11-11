import { TeamsService } from 'src/app/shared/services/teamService/teams.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/shared/services/viacep.service';
import { LeagueService } from 'src/app/shared/services/leagueService/league.service';
import { Liga } from 'src/app/model/League/liga';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {

  novoTime!: FormGroup;
  divisao = ['Série Ouro', 'Série Prata', 'Série Bronze'];
  equipes: any = [];

  constructor(
    private fb: FormBuilder,
    private cepService: ViacepService,
    private ligaService: LeagueService,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.getLeagues();
    this.novoTime = this.fb.group({
      infos: this.fb.group({
        name: [''],
        surname: [''],
        initials: [''],
        president: [''],
      }),
      endereco: this.fb.group({
        cep: [''],
        logradouro: [''],
        numero: [''],
        complemento: [''],
        localidade: [''],
        uf: [''],
        leagues:[''],
      }),
      img_scudo: [''],
      img_stadium: ['']
    });
  }

  getAddress() {
    const cep = this.novoTime.get('endereco.cep')?.value;
    this.cepService.getEndereco(cep).subscribe({
      next: (endereco) => {
        console.log('CEP', endereco);
        this.novoTime.patchValue({endereco});
      }
    })
  }

  getLeagues() {
    this.ligaService.getAllLeagues().subscribe({
      next: (data) => {
        this.equipes = data;
        console.log(data);
      }
    })
  }

  save(form: any) {
    this.teamsService.createTeam(form).subscribe({
      next: (data) => {
        console.log('sucesso', data);
      },
      error: (err) => {
        console.log('err');
      }
    })
    console.log('oi', form);
  }

}
