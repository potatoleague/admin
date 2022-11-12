import { LeagueService } from './../../../shared/services/leagueService/league.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-head',
  templateUrl: './league-head.component.html',
  styleUrls: ['./league-head.component.scss']
})
export class LeagueHeadComponent implements OnInit {

  isVisible: boolean = false;
  displayedColumns: string[] = ['nome', 'início', 'fim', 'sitema', 'modalidade', 'status', 'ações'];

  leagues:  any[] = [];

  dataSource = new MatTableDataSource(this.leagues);
  constructor(
    private router: Router,
    private leagueService: LeagueService
  ) { }

  ngOnInit(): void {
    this.league();
  }

  league() {
    console.log('displayedColumns', this.displayedColumns)
    this.leagueService.getAllLeagues().subscribe({
      next: (data) => {
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
