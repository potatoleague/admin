import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LeagueService } from 'src/app/shared/services/leagueService/league.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})

export class ContractsComponent implements OnInit {
  ELEMENT_DATA: Contract[] = [];
  FILTERED_DATA: Contract[] = [];

  displayedColumns: string[] = ['name', 'position', 'team', 'start', 'end', 'status', 'actions'];
  dataSource = new MatTableDataSource<Contract>(this.ELEMENT_DATA);

  constructor(
    private ligaService: LeagueService
  ) { }

  ngOnInit(): void {
    this.allContracts();
  }

  allContracts() {
    this.ligaService.getAllContracts().subscribe({
      next: (data) => {
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource<Contract>(data);
        console.log("CONTRACTS", data);
      },
      error: (err) => {
        console.log('ERR CONTRACTS', err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornPosition(position: any): string {
    if (position == '0') {
      return 'Goleiro'
    } else if (position == '1') {
      return 'Lateral'
    } else if (position == '2') {
      return 'Zagueiro'
    } else if (position == '3') {
      return 'Volante'
    } else if (position == '4') {
      return 'Meia'
    } else {
      return 'Atacante'
    }
  }
}

export interface Contract {
  id?: number;
  dt_start_contract: string;
  dt_end_contract: string;
  atletas: any[];
  times: any[];
}