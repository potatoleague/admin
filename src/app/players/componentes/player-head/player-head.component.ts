import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/playerService/player.service';

@Component({
  selector: 'app-player-head',
  templateUrl: './player-head.component.html',
  styleUrls: ['./player-head.component.scss']
})
export class PlayerHeadComponent implements OnInit {
  alphabet: string[] = [];
  atletas: any = [];

  constructor(
    private atletaService: PlayerService
  ) { }

  ngOnInit(): void {
    this.alphabethList();
    this.getAllPlayers();
  }

  alphabethList() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
  }

  getAllPlayers() {
    this.atletaService.getAllPlayers().subscribe({
      next: (data) => {
        this.atletas = data;
        console.log('getAllPlayers', data);
      }
    });
  }
}
