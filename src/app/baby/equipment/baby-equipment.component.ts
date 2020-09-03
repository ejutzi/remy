import { Component, OnInit } from '@angular/core';

import { BABYEQUIP } from './baby-equipment-mock';

@Component({
  selector: 'app-baby-equipment',
  templateUrl: './baby-equipment.component.html',
  styleUrls: ['./baby-equipment.component.css']
})
export class BabyEquipmentComponent implements OnInit  {
  babyequip = BABYEQUIP;

  constructor() { }

  ngOnInit(): void {
  }

}
