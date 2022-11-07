import { LeagueService } from './../../../shared/services/leagueService/league.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Liga } from 'src/app/model/League/liga';

@Component({
  selector: 'app-league-head',
  templateUrl: './league-head.component.html',
  styleUrls: ['./league-head.component.scss']
})
export class LeagueHeadComponent implements OnInit {

  isVisible: boolean = false;
  displayedColumns: string[] = ['id', 'nome', 'início', 'fim', 'ações'];

  leagues: any = [
    // {
    //   id: 1,
    //   name: 'League A',
    //   dt_inicio: '01/07/2023',
    //   dt_fim: '07/07/2023',
    // },
    // {
    //   id: 2,
    //   name: 'League B',
    //   dt_inicio: '02/07/2023',
    //   dt_fim: '08/07/2023',
    // },
    // {
    //   id: 3,
    //   name: 'League C',
    //   dt_inicio: '03/07/2023',
    //   dt_fim: '09/07/2023',
    // },
  ];

  dataSource = new MatTableDataSource(this.leagues);
  constructor(
    private router: Router,
    private leagueService: LeagueService
  ) { }

  ngOnInit(): void {
    this.league();
  }

  league() {
    this.leagueService.getAllLeagues().subscribe({
      next: (data: Liga) => {
        this.leagues = data;
        this.isVisible = true;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  create() {
    this.router.navigate(['control/nova-liga'])
  }
}
