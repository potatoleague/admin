import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/shared/services/teamService/teams.service';

@Component({
  selector: 'app-team-head',
  templateUrl: './team-head.component.html',
  styleUrls: ['./team-head.component.scss']
})
export class TeamHeadComponent implements OnInit {

  equipes: any = [];

  constructor(
    private route: Router,
    private teamService: TeamsService
  ) { }

  ngOnInit(): void {
    this.getTimes();
  }

  getTime(id: number) {
    console.log('ID TIME', 'time/'+id);
    this.route.navigate(['time/'+id]);
  }

  getTimes() {
    this.teamService.getAllTeams().subscribe({
      next: (data) => {
        this.equipes = data;
        console.log('getTimes', data);
      }
    });
  }

}
