import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heading } from '../interfaces/heading';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getHeadings(): Observable<Heading[]> {
    return this.httpClient.get<Heading[]>(environment.api + '/Rubros');
  }
}
