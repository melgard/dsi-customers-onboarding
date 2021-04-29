import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserSession } from 'src/app/modules/home/interfaces/user-session';
import { StorageService } from 'src/app/modules/home/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  public user: UserSession = null as any;
  public isAuthenticated: boolean = false;

  constructor(
    public storageService: StorageService
  ) {

    this.isAuthenticated = this.storageService.isAuthenticated();
    
    if(this.isAuthenticated) {
      this.user = this.storageService.getCurrentUser();
    }
  }

  ngOnInit(): void {

  }

  logOut() {
    this.storageService.logout();
  }
  hasBeenSaved() {
    location.reload();
  }
}
