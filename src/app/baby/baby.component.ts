import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../item.interface';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls:
  [
    './baby.component.css'
  ]
})
export class BabyComponent implements OnInit  {

  loadedItems: Item[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.isFetching = true;
    this.itemsService.fetchItems().subscribe(items => {
      this.isFetching = false;
      this.loadedItems = items;
      this.onFilterItems('Dummy');
    });
  }

  onCreateItem(itemData: Item) {
    this.http.post(
      'https://remy-c6dbc.firebaseio.com/items.json',
      itemData
    ).subscribe(responseData => {

    });
  }

  onFetchItems() {
    this.isFetching = true;
    this.itemsService.fetchItems().subscribe(items => {
      this.isFetching = false;
      this.loadedItems = items;
      this.onFilterItems('Dummy');
    });
  }

  onClearItems() {

  }

  onFilterItems(filterArg) {
    this.loadedItems.filter(i => i.subcategory === filterArg)
    console.log(this.loadedItems);
  }
}
