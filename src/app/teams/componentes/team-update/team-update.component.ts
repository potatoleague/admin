import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/shared/services/teamService/teams.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.scss']
})
export class TeamUpdateComponent implements OnInit {
  id_time: string = '';
  id_liga: string = '';
  timeForm!: FormGroup;
  divisao = ['Série Ouro', 'Série Prata', 'Série Bronze'];
  equipe: any = [];

  constructor(
    private fb: FormBuilder,
    private teamService: TeamsService,
    private actvRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_time = this.actvRouter.snapshot.params["id"];
    this.cadEquipe();
    this.teamById();
  }

  cadEquipe() {
    this.timeForm = this.fb.group({
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
        status: [false]
      }),
      img_scudo: [''],
      img_stadium: ['']
    });
  }

  teamById() {
    this.teamService.getTeamById(+this.id_time).subscribe({
      next: (data) => {
        this.equipe = data;
        this.id_liga = this.equipe.liga.id;
        this.timeForm.patchValue({
          infos: ({
            name: this.equipe.name,
            surname: this.equipe.surname,
            initials: this.equipe.initials,
            president: this.equipe.president,
            dt_nascimento: this.equipe.dt_nascimento,
            phone: this.equipe.phone
          }),
          endereco: ({
            cep: this.equipe.cep,
            logradouro: this.equipe.logradouro,
            numero: this.equipe.numero,
            bairro: this.equipe.bairro,
            complemento: this.equipe.complemento,
            localidade: this.equipe.localidade,
            uf: this.equipe.uf,
            status: this.equipe.status
          }),
          img_scudo: this.equipe.img_scudo,
          img_stadium: this.equipe.img_stadium,
        })
        console.log('teamById', this.equipe);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  update(values: any) {

    console.log('OBJ', values);
    let obj: any = {
      bairro: values.endereco.bairro,
      cep: values.endereco.cep,
      cidade: values.endereco.localidade,
      complemento: values.endereco.complemento,
      id: +this.id_time,
      dt_nascimento: values.infos.dt_nascimento,
      img_scudo: values.img_scudo,
      img_stadium: values.img_stadium,
      initials: values.infos.initials,
      liga: { id:  +this.id_liga},
      contratos: [],
      logradouro: values.endereco.logradouro,
      name: values.infos.name,
      numero: values.endereco.numero,
      phone: values.infos.phone,
      president: values.infos.president,
      status: values.endereco.status,
      surname: values.infos.surname,
      uf: values.endereco.uf
    }

    this.teamService.updateTeam(+this.id_time, obj).subscribe({
      next: (data) => {
        console.log('updateTeam', data);
        this.router.navigate([`times`]);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

}
