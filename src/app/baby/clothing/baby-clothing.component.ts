import { Component, OnInit } from '@angular/core';

import { BABYCLOTHING } from './baby-clothing-mock';

@Component({
  selector: 'app-baby-clothing',
  templateUrl: './baby-clothing.component.html',
  styleUrls: ['./baby-clothing.component.css']
})
export class BabyClothingComponent implements OnInit  {
  babyclothing = BABYCLOTHING;

  constructor() { }

  ngOnInit(): void {
  }

}
