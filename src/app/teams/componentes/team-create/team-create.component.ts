import { TeamsService } from 'src/app/shared/services/teamService/teams.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/shared/services/viacep.service';
import { LeagueService } from 'src/app/shared/services/leagueService/league.service';
import { Router } from '@angular/router';

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
    private teamsService: TeamsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLeagues();
    this.novoTime = this.fb.group({
      infos: this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        initials: ['', Validators.required],
        president: ['', Validators.required],
        dt_nascimento: ['', Validators.required],
        phone: ['', Validators.required]
      }),
      endereco: this.fb.group({
        cep: [''],
        logradouro: [''],
        numero: [''],
        bairro: [''],
        complemento: [''],
        localidade: [''],
        uf: [''],
        leagues: [''],
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
        this.novoTime.patchValue({ endereco });
      }
    })
  }

  getLeagues() {
    this.ligaService.getAllLeagues().subscribe({
      next: (data) => {
        this.equipes = data;
        console.log(data);
      }
    });
  }

  save(form: any) {
    let obj: any = {
      bairro: form.endereco.bairro,
      cep: form.endereco.cep,
      cidade: form.endereco.localidade,
      complemento: form.endereco.complemento,
      dt_nascimento: form.infos.dt_nascimento,
      img_scudo: form.img_scudo ? form.img_scudo : null,
      img_stadium: form.img_stadium,
      initials: form.infos.initials,
      ligas_id: form.endereco.leagues,
      logradouro: form.endereco.logradouro,
      name: form.infos.name,
      numero: form.endereco.numero,
      phone: form.infos.phone,
      president: form.infos.president,
      status: true,
      surname: form.infos.surname,
      uf: form.endereco.uf
    }
    console.log('OBJ', obj);

    this.teamsService.createTeam(obj).subscribe({
      next: (data) => {
        console.log('sucesso', data);
        this.router.navigate(['/times']);

      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

}
