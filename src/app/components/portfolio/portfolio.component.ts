import { Component, OnInit } from '@angular/core';
declare function InitializePortfolio();

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    InitializePortfolio();
  }
}
