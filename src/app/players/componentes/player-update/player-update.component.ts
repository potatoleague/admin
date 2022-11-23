import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { positions } from 'src/app/shared/menu';
import { PlayerService } from 'src/app/shared/services/playerService/player.service';
import { TeamsService } from 'src/app/shared/services/teamService/teams.service';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.scss']
})
export class PlayerUpdateComponent implements OnInit {
  player!: FormGroup;
  positions = positions;
  teams: any[] = [];
  id_player: string = '';
  jogador: any = [];

  constructor(
    private playerService: PlayerService,
    private teamService: TeamsService,
    private fb: FormBuilder,
    private actvRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.profilePlayer();
    this.getTeams();
    this.playerId();
    this.id_player = this.actvRouter.snapshot.params["id"];
    console.log('id_player', typeof(this.id_player))
  }

  profilePlayer() {
    this.player = this.fb.group({
      name: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      position: ['', Validators.required],
      surname: ['', Validators.required]
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

  playerId() {
    this.playerService.getPlayerById(+this.id_player).subscribe({
      next: (data) => {
        this.jogador = data;
        console.log('playerId', this.jogador)
      }
    })
  }

  update(obj: any) {
    let form = {
      ...obj, status: true, time: {
        id: 1
      }
    }
    console.log('FORM', form);
    // return
    this.playerService.updatePlayer(+this.id_player, form).subscribe({
      next: (data) => {
        console.log('Joagador atualizado com sucesso');
      },
      error: (err) => {
        console.log('Erro ao atualizar o joagador');
      }
    })
  }
}

