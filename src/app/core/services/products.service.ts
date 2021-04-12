
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';


@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    getProducts() {
      return this.http.get<any>('assets/data/products.json')
        .toPromise()
        .then(res => <Image[]>res.data)
        .then(data => { return data; });
    }
}