import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/core/services/photo.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [PhotoService]
})
export class CarouselComponent implements OnInit {

  public images: any[] = [];
  public responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '1024px',
          numVisible: 1
      }
  ];

  constructor(
    private photoService: PhotoService
  ) {
  }
  
  ngOnInit(): void {
    this.photoService.getImages().then(images => {
      this.images = images;
      console.log(this.images);
    });
  }

}
