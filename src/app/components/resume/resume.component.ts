import { Component, OnInit } from '@angular/core';
declare function InitializeCharts();
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    InitializeCharts();
  }
}
