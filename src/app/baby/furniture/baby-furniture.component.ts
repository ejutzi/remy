import { Component, OnInit } from '@angular/core';

import { BABYFURNITURE } from './baby-furniture-mock';

@Component({
  selector: 'app-baby-furniture',
  templateUrl: './baby-furniture.component.html',
  styleUrls: ['./baby-furniture.component.css']
})
export class BabyFurnitureComponent implements OnInit  {
  babyfurniture = BABYFURNITURE;

  constructor() { }

  ngOnInit(): void {
  }

}
