import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Item } from './item.interface';

@Injectable({providedIn: 'root'})
export class ItemsService {

  constructor(private http: HttpClient) {}

  createItem(
    id: string,
    title: string,
    subtitle: string,
    description: string,
    category: string,
    subcategory: string,
    specific: string,
    quantity: string,
    picture: string[],
    size: string,
    weight: string,
    color: string,
    material: string,
    manufacturer: string,
    manufacturerId: string,
    supplier: string,
    supplierId: string,
    supplierUrl: string,
    clothingAge: string,
    clothingSize: string
  ) {
    const itemData: Item = {
      id: id,
      title: title,
      subtitle: subtitle,
      description: description,
      category: category,
      subcategory: subcategory,
      specific: specific,
      quantity: quantity,
      picture: picture,
      size: size,
      weight: weight,
      color: color,
      material: material,
      manufacturer: manufacturer,
      manufacturerId: manufacturerId,
      supplier: supplier,
      supplierId: supplierId,
      supplierUrl: supplierUrl,
      clothingAge: clothingAge,
      clothingSize: clothingSize
    }
    this.http
    .post(
      'https://remy-c6dbc.firebaseio.com/items.json',
      itemData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchItems() {
    return this.http
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
        })
      );
  }
}
