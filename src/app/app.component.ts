import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Item } from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReMy';

  loadedItems: Item[] = [];

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
        this.loadedItems = items;
    });
  }
}
