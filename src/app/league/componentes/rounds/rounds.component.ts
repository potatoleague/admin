import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

  firstTurn: any[] = [];
  secondTurn: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  gerar() {
    // const time: any[] = this.times;
    const time: any = [
      'São Paulo',
      'Santos',
      'Corinthians',
      'Palmeiras',
      'Flamengo',
      'Fluminense',
      'Vasco',
      'Botafogo',
    ];
    const lengthArray = time.length;
    const time02 = time.splice(lengthArray / 2, Number.MAX_VALUE);
    const time01 = time;
    // console.log('ORIGINAL', time01, time02);
    this.firstTurn = this.segundoTurno(time01, time02, lengthArray);
    this.secondTurn = this.segundoTurno(time02, time01, lengthArray);
  }

  segundoTurno(timeA: any, timeB: any, lengthArray: any) {
    const round: any = [];
    let mandator: any;
    let visitor: any;
    let i = 0;
    let k = 1;

    for (i = 0; i < lengthArray - 1; i++) {
      let rodada = k,
        dt_partida = new Date();
      round[i] = {
        rodada,
        dt_partida,
        jogos: [],
      };
      for (let j = 0; j < lengthArray / 2; j++) {
        mandator = timeA[j];
        visitor = timeB[j];

        round[i].jogos.push({
          mandator,
          visitor,
        });
      }
      k++;
      const back1 = timeB.splice(0, 1); // BA
      const back2 = timeA.splice(2, 1); //MG
      timeA.splice(1, 0, back1[0]);
      timeB.splice(2, 0, back2[0]);
    }
    console.log('RESULT SEGUNDO TURNO', round);
    // this.secondTurn = round;
    return round;
  }

}
