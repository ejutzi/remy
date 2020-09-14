import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../item.interface';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-baby-equipment',
  templateUrl: './baby-equipment.component.html',
  styleUrls:
    [
      './baby-equipment.component.css'
    ]
})
export class BabyEquipmentComponent implements OnInit  {

  loadedItems: Item[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.isFetching = true;
    this.itemsService.fetchItems().subscribe(items => {
      this.isFetching = false;
      this.loadedItems = items;
    });
  }
}
