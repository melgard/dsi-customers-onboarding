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
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(
    private photoService: PhotoService
  ) {
    this.photoService.getImages().then(images => this.images = images)
  }

  ngOnInit(): void {
  }

}
