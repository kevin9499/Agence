import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.isLogin = true;
    console.log(this.isLogin);
  }

  handleLogout() {
    this.isLogin = false;
    console.log(this.isLogin);
  }

}
