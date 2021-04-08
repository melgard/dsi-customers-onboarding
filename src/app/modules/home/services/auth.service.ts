import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Session } from '../interfaces/session';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(user: User) {
    return this.httpClient.post(environment.api + '/Usuarios/login', user);
  }

  extractData(resp: any): Session {
    const session: Session = {
      token: resp.token,
      user: {
        cientId: resp.clientId,
        email: resp.email,
        nombreCompleto: resp.nombreCompleto,
        userId: resp.userId
      }
    };
    return session;
  }
}
