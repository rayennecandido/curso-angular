import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-components',
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.css'],
})
export class FirstComponentsComponent implements OnInit {
  name: String = 'Rayenne';
  number = '27';

  constructor() {}

  ngOnInit(): void {}
}
