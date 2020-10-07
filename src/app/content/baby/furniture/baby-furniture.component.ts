import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../../item.interface';
import { ItemsService } from '../../../items.service';

@Component({
  selector: 'app-baby-furniture',
  templateUrl: './baby-furniture.component.html',
  styleUrls:
    [
      '../baby.component.css',
      './baby-furniture.component.css'
    ]
})
export class BabyFurnitureComponent implements OnInit  {

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
