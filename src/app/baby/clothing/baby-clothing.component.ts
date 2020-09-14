import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../item.interface';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-baby-clothing',
  templateUrl: './baby-clothing.component.html',
  styleUrls:
    [
      '../baby.component.css',
      './baby-clothing.component.css'
    ]
})
export class BabyClothingComponent implements OnInit  {

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
