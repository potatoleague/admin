import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-refresh',
  templateUrl: './login-refresh.component.html',
  styleUrls: ['./login-refresh.component.scss']
})
export class LoginRefreshComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  constructor() { }

  ngOnInit(): void {
  }

}
