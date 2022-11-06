import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refree-head',
  templateUrl: './refree-head.component.html',
  styleUrls: ['./refree-head.component.scss']
})
export class RefreeHeadComponent implements OnInit {

  alphabet: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.alphabethList();
  }

  alphabethList() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
  }

}
