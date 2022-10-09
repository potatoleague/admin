import { Component, Input, OnInit } from '@angular/core';
import { menuData } from '../menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  menu = menuData

  constructor() { }

  ngOnInit(): void {
  }

}
