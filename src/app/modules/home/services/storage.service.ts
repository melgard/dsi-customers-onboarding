import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../interfaces/session';
import { UserSession } from '../interfaces/user-session';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession : Session;
  
  constructor(
    private router: Router
  ) { 
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session{
    const sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null as any;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null as any;
  }

  getCurrentUser(): UserSession {
    const session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null as any;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return (session && session.token) ? session.token : null as any;
  };

  logout(): void{
    this.removeCurrentSession();
    location.reload();
  }
}
