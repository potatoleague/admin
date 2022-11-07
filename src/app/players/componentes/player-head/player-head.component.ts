import { Times } from './../../../model/Player/player';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/playerService/player.service';

@Component({
  selector: 'app-player-head',
  templateUrl: './player-head.component.html',
  styleUrls: ['./player-head.component.scss']
})
export class PlayerHeadComponent implements OnInit {
  alphabet: string[] = [];

  constructor(
    private timeService: PlayerService
  ) { }

  ngOnInit(): void {
    this.alphabethList();
    this.allPayers();
  }

  alphabethList() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
  }

  allPayers() {
    this.timeService.getAllPlayers().subscribe({
      next: (data: Times) => {
        console.log('allPayers', data)
      }
    });
  }
}
