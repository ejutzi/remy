import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:
  [
    '../app.component.css',
    './header.component.css'
  ]
})
export class HeaderComponent implements OnInit  {
  icon = './assets/img/dolphin.svg';
  logo = './assets/img/remy-logo.png';

  constructor() { }

  ngOnInit(): void {
  }

  /*
  menuBtn = document.querySelector('.menu-btn');
  menuItems = document.querySelector('menu-items');
  menuItem = document.querySelectorAll('menu-item');

  menuBtn.addEventListener('click', () => {
    toggle();
  });

  toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }
  */
}
