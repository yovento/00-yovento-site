import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  _MobileMenu: boolean = false;
  constructor() {}

  toggleMenu() {
    this._MobileMenu = !this._MobileMenu;

    document.getElementById('sidebar').style.marginLeft =
      this._MobileMenu == true ? '0rem' : '-17rem';
  }

  ngOnInit(): void {}
}
