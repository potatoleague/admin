import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-head',
  templateUrl: './team-head.component.html',
  styleUrls: ['./team-head.component.scss']
})
export class TeamHeadComponent implements OnInit {

  times = [
    {
      id: 1,
      name: 'Tabajara',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTNbhCSJfZ0nFma3LAu9FEJTC30LPLadRmw&usqp=CAU',
      routerLink: '/time/1',
    },
    {
      id: 2,
      name: 'Fulera',
      url: 'https://i.pinimg.com/736x/b1/df/c0/b1dfc0f1643a27b493f769fcd969e556.jpg',
      routerLink: '/time/2',
    },
    {
      id: 3,
      name: 'Detebayô',
      url: 'https://img1.gratispng.com/20180204/pow/kisspng-shield-clip-art-blank-shield-logo-vector-png-5a7769fe5a2686.6419025415177753583693.jpg',
      routerLink: `/time/3`,
    },
    {
      id: 4,
      name: 'Chazan',
      url: 'https://media.istockphoto.com/vectors/shield-white-icon-vector-id490220620',
      routerLink: 'time/4',
    },
    {
      id: 5,
      name: 'Tiricutico',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTNbhCSJfZ0nFma3LAu9FEJTC30LPLadRmw&usqp=CAU',
      routerLink: '/time/5',
    },
    {
      id: 6,
      name: 'Bedâme',
      url: 'https://i.pinimg.com/736x/b1/df/c0/b1dfc0f1643a27b493f769fcd969e556.jpg',
      routerLink: '/time/6',
    },
  ];

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  getTime(id: number) {
    console.log('ID TIME', 'time/'+id);
    this.route.navigate(['time/'+id]);
  }

}
