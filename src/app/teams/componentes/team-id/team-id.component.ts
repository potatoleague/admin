import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/shared/services/teamService/teams.service';

@Component({
  selector: 'app-team-id',
  templateUrl: './team-id.component.html',
  styleUrls: ['./team-id.component.scss']
})
export class TeamIdComponent implements OnInit {
  id_time: String = '';
  equipe: any = [];

  url_scudo: string = 'assets/images/img_scudo/';
  atletas: any = [{
    id: 1, surname: 'Kokhym', position: 'Atacante'
  }];

  constructor(
    private actvRouter : ActivatedRoute,
    private teamService: TeamsService,
    private router: Router
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
    });
  }

  goUpdate() {
    this.router.navigate([`times/update/${this.id_time}`]);
  }

}
