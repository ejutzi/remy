import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:
  [
    '../app.component.css'
  ]
})
export class HeaderComponent implements OnInit  {
  logo = './../../assets/img/dolphin.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
