import { Component, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public items: MenuItem[];
  public megaMenuItems: MenuItem[];

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
  this.megaMenuItems = this.getMegaMenuItems(false);
  }

  ngOnInit(): void {
  }

  getMegaMenuItems(isLogged: boolean): Array<MenuItem> {
    return [
      {
        label: isLogged ? 'userName' : '', 
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Registrarse',
            visible: !isLogged,
            command: this.register
          },
          {
            label: 'Iniciar Sesión',
            visible: !isLogged,
            command: this.login
          },
          {
            label: 'Cerrar Sesión',
            visible: isLogged,
            command: this.logOut
          }
        ]
      }
    ]
  }

  register() {
    console.log('register');
  }

  login() {
    console.log('login');
  }

  logOut() {
    console.log('logOut');
  }
}
