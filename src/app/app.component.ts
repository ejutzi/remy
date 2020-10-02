import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Item } from './item.interface';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReMy';

  loadedItems: Item[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.fetchItems();
  }

  onCreateItem(itemData: Item) {
    this.itemsService.createItem(
      itemData.id,
      itemData.title,
      itemData.subtitle,
      itemData.description,
      itemData.category,
      itemData.subcategory,
      itemData.specific,
      itemData.quantity,
      itemData.picture,
      itemData.size,
      itemData.weight,
      itemData.color,
      itemData.material,
      itemData.manufacturer,
      itemData.manufacturerId,
      itemData.supplier,
      itemData.supplierId,
      itemData.supplierUrl,
      itemData.clothingAge,
      itemData.clothingSize
    );
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
