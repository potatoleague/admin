import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-config',
  templateUrl: './league-config.component.html',
  styleUrls: ['./league-config.component.scss']
})
export class LeagueConfigComponent implements OnInit {
  toppings!: FormGroup

  times = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
  ]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.toppings = this._formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

}
