import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public items: MenuItem[];

  constructor() {

    this.items = [
      {
        label: 'Sección 1',
        url: '/home#oneInfo'
      },
      {
        label: 'Sección 2',
        url: '/home#twoInfo'
      },
      {
        label: 'Sección 3',
        url: '/home#threeInfo'
      }
  ];
  }

  ngOnInit(): void {
  }

}
