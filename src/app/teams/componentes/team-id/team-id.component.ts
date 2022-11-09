import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/model/Teams/Time';
import { TeamsService } from 'src/app/shared/services/teamService/teams.service';

@Component({
  selector: 'app-team-id',
  templateUrl: './team-id.component.html',
  styleUrls: ['./team-id.component.scss']
})
export class TeamIdComponent implements OnInit {
  id_time: String = '';
  equipe: any = [];

  constructor(
    private actvRouter : ActivatedRoute,
    private teamService: TeamsService
  ) { }

  ngOnInit(): void {
    this.id_time = this.actvRouter.snapshot.params["id"];
    this.teamById();
  }

  teamById() {
    this.teamService.getTeamById(+this.id_time).subscribe({
      next: (data) => {
        this.equipe = data;
        console.log('teamById', this.equipe);
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

}
