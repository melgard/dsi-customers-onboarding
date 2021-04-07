import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfoSectionOneComponent } from './components/info-section-one/info-section-one.component';
import { InfoSectionTwoComponent } from './components/info-section-two/info-section-two.component';
import { InfoSectionThreeComponent } from './components/info-section-three/info-section-three.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';


@NgModule({
  declarations: [
    IndexComponent, 
    NavbarComponent, 
    CarouselComponent, 
    InfoSectionOneComponent, 
    InfoSectionTwoComponent, 
    InfoSectionThreeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
