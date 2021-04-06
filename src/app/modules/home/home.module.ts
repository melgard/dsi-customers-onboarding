import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    IndexComponent, 
    NavbarComponent, CarouselComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
