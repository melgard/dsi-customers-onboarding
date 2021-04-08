import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { UserSession } from 'src/app/modules/home/interfaces/user-session';
import { StorageService } from 'src/app/modules/home/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  public items: MenuItem[];
  public megaMenuItems: MenuItem[];
  public displayRegisterForm: boolean = false;
  public displayLoginForm: boolean = false;
  public user: UserSession = null as any;
  private isAuthenticated: boolean = false;

  constructor(
    public storageService: StorageService
  ) {

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
  this.isAuthenticated = this.storageService.isAuthenticated();
  
  if(this.isAuthenticated) {
    this.user = this.storageService.getCurrentUser();
  }
    this.megaMenuItems = this.getMegaMenuItems(this.isAuthenticated);
  }

  ngOnInit(): void {

  }

  getMegaMenuItems(isLogged: boolean): Array<MenuItem> {
    return [
      {
        label: isLogged ?  this.user.nombreCompleto : '', 
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Registrarse',
            visible: !isLogged,
            command: () => this.register()
          },
          {
            label: 'Iniciar Sesión',
            visible: !isLogged,
            command: () => this.login()
          },
          {
            label: 'Ir a la plataforma',
            visible: isLogged
          },
          {
            label: 'Cerrar Sesión',
            visible: isLogged,
            command: () => this.logOut()
          }
        ]
      }
    ]
  }

  registerEvent() {
    this.register();
  }

  register() {
    this.displayRegisterForm = true;
  }

  login() {
    this.displayLoginForm = true;
  }

  logOut() {
    this.storageService.logout();
  }
  hasBeenSaved() {
    this.displayRegisterForm = false;
  }
}
