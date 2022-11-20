import { ActivatedRoute } from '@angular/router';
import { LeagueService } from './../../../shared/services/leagueService/league.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-config',
  templateUrl: './league-config.component.html',
  styleUrls: ['./league-config.component.scss']
})
export class LeagueConfigComponent implements OnInit {
  toppings!: FormGroup
  id: string = '';
  leagues_teams: any[] = [];
  times = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
  ]

  constructor(
    private _formBuilder: FormBuilder,
    private LeagueService: LeagueService,
    private actvRouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.actvRouter.snapshot.params["id"];
    this.toppings = this._formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
    this.getTeamsLeague();
  }

  getTeamsLeague() {
    this.LeagueService.getLeagueById(+this.id).subscribe({
      next: (data) => {
        this.leagues_teams = data;
        console.log(this.leagues_teams);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

}
