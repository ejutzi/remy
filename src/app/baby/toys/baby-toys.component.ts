import { Component, OnInit } from '@angular/core';

import { BABYTOYS } from './baby-toys-mock';

@Component({
  selector: 'app-baby-toys',
  templateUrl: './baby-toys.component.html',
  styleUrls:
    [
      '../baby.component.css',
      './baby-toys.component.css'
    ]
})
export class BabyToysComponent implements OnInit  {
  babytoys = BABYTOYS;

  constructor() { }

  ngOnInit(): void {
  }

}
