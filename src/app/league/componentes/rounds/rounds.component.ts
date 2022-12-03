import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

  firstTurn: any[] = [];
  secondTurn: any[] = [];

  k = 1;
  last_date = new Date();

  constructor() { }

  ngOnInit(): void {
    // let teste = moment(moment(this.last_date), "MM-DD-YYYY").add(7, 'days');
    // console.log('teste', teste)
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
    this.secondTurn = this.segundoTurno(time01, time02, lengthArray);
  }

  segundoTurno(timeA: any, timeB: any, lengthArray: any) {
    const round: any = [];
    let mandator: any;
    let visitor: any;
    let i = 0;

    for (i = 0; i < lengthArray - 1; i++) {
      let id = this.k,
        dt_partida = this.last_date,
        status = true;
      round[i] = {
        id,
        dt_partida,
        status,
        jogos: [],
      };
      for (let j = 0; j < lengthArray / 2; j++) {
        if (id % 2 == 0) {
          mandator = timeA[j];
          visitor = timeB[j];
        } else {
          mandator = timeB[j];
          visitor = timeA[j];
        }

        round[i].jogos.push({
          mandator,
          visitor,
        });
        // this.last_date = this.last_date.getTime + 7;
      }
      this.k++;
      const back1 = timeB.splice(0, 1); // BA
      const back2 = timeA.splice(3, 1); //MG
      timeA.splice(1, 0, back1[0]);
      timeB.splice(3, 0, back2[0]);
    }
    console.log('RESULT SEGUNDO TURNO', round);
    this.secondTurn = round;
    return round;
  }

}
