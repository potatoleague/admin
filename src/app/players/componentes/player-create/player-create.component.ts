import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positions } from 'src/app/shared/menu';
import { PlayerService } from 'src/app/shared/services/playerService/player.service';
import { TeamsService } from 'src/app/shared/services/teamService/teams.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {

  player!:FormGroup;
  positions = positions;
  teams: any[] = [];

  constructor(
    private playerService: PlayerService,
    private teamService: TeamsService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profilePlayer();
    this.getTeams();
  }

  profilePlayer() {
    this.player = this.fb.group({
      name: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      position: ['', Validators.required],
      surname: ['', Validators.required],
      team: ['', Validators.required]
    });
  }

  getTeams() {
    this.teamService.getAllTeams().subscribe({
      next: (data) => {
        this.teams = data;
        console.log('getTeams', this.teams);
      }
    })
  }

  create(obj: any) {
    let form = {
      id: null,
      cpf: obj.cpf,
      name: obj.name,
      position: obj.position,
      rg: obj.rg,
      surname: obj.surname,
      status: true,
      time: { id: obj.team }
    }
    console.log('FORM', form);
    // return
    this.playerService.createPlayer(form).subscribe({
      next: (data) => {
        console.log('Joagador criado com sucesso');
        this.router.navigate(['/atletas'])
      },
      error: (err) => {
        console.log('Erro ao criar joagador');
      }
    })
  }
}
