import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-player-id',
  templateUrl: './player-id.component.html',
  styleUrls: ['./player-id.component.scss']
})
export class PlayerIdComponent implements OnInit {
  id: string = '';

  constructor(
    private actvRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.actvRouter.snapshot.params["id"];
  }

  update() {
    this.router.navigate([`/atletas/update/${this.id}`])
  }
}
