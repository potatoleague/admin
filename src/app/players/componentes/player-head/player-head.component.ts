import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-head',
  templateUrl: './player-head.component.html',
  styleUrls: ['./player-head.component.scss']
})
export class PlayerHeadComponent implements OnInit {
  alphabet: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.alphabethList();
  }

  alphabethList() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
  }
}
