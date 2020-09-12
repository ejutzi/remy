import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../item.interface';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls:
  [
    '../app.component.css',
    './admin.component.css'
  ]
})
export class AdminComponent implements OnInit {
  title = 'ReMy';

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
    });
  }

  onClearItems() {

  }
}
