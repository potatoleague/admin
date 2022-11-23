import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PlayerService } from 'src/app/shared/services/playerService/player.service';

@Component({
  selector: 'app-player-id',
  templateUrl: './player-id.component.html',
  styleUrls: ['./player-id.component.scss']
})
export class PlayerIdComponent implements OnInit {
  id: string = '';

  constructor(
    private actvRouter: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.id = this.actvRouter.snapshot.params["id"];
    this.getPlayerId();
  }

  getPlayerId() {
    this.playerService.getPlayerById(+this.id).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  update() {
    this.router.navigate([`/atletas/update/${+this.id}`])
  }

  retornPosition(position: any): string {
    if (position == '0') {
      return 'Goleiro'
    } else if (position == '1') {
      return 'Lateral'
    } else if (position == '2') {
      return 'Zagueiro'
    } else if (position == '3') {
      return 'Volante'
    } else if (position == '4') {
      return 'Meia'
    } else {
      return 'Atacante'
    }
  }
}
