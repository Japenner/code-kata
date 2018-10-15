import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {
  inputs: string[] = ['First', 'Second', 'Third'];

  constructor() { }

  ngOnInit() {
  }

}
