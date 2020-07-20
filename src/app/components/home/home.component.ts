import { Component, OnInit } from '@angular/core';
declare function InitializeTextAnimation();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    InitializeTextAnimation();
  }
}
