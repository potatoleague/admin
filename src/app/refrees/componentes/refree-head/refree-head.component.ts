import { RefreeService } from './../../../shared/services/refreeService/refree.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refree-head',
  templateUrl: './refree-head.component.html',
  styleUrls: ['./refree-head.component.scss']
})
export class RefreeHeadComponent implements OnInit {

  alphabet: string[] = [];
  arbitros: any[] = [];

  constructor(
    private refreeService: RefreeService
  ) { }

  ngOnInit(): void {
    this.alphabethList();
    this.allRefrees();
  }

  alphabethList() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
  }

  allRefrees() {
    this.refreeService.getAllRefrees().subscribe({
      next: (data) => {
        this.arbitros = data;
        console.log('allRefrees', this.arbitros);
      },
      error: (err) => {
        console.log('err allRefrees', err);
      }
    });
  }

}
