import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [ProductsService]
})
export class CarouselComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public products: any[] = [];
  public responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private productsService: ProductsService,
    private storageService: StorageService
  ) {
    this.isAuthenticated = this.storageService.isAuthenticated();
  }
  
  ngOnInit(): void {
    this.productsService.getProducts().then(products => {
      this.products = products;
      console.log(this.products);
    });
  }

}
