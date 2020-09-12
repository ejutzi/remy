import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Item } from '../item.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls:
  [
    '../app.component.css',
    './admin.component.css'
  ]
})
export class AdminComponent {
  title = 'ReMy';

  loadedItems: Item[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fetchItems();
  }

  onCreateItem(itemData: Item) {
    this.http.post(
      'https://remy-c6dbc.firebaseio.com/items.json',
      itemData
    ).subscribe(responseData => {

    });
  }

  onFetchItems() {
    this.fetchItems();
  }

  onClearItems() {

  }

  private fetchItems() {
    this.http
      .get<{ [key: string]: Item }>('https://remy-c6dbc.firebaseio.com/items.json')
      .pipe(
        map(responseData => {
        const itemsArray: Item[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            itemsArray.push({ ...responseData[key], id: key })
          }
        }
        return itemsArray;
      }))
      .subscribe(items => {
        this.isFetching = false;
        this.loadedItems = items;
    });
  }
}
