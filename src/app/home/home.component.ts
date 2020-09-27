import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../item.interface';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:
  [
    './home.component.css'
  ]
})
export class HomeComponent implements OnInit  {

  loadedItems: Item[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit() {}
}
