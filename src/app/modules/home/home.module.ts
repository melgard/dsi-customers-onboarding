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
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    IndexComponent, 
    NavbarComponent, 
    CarouselComponent, 
    InfoSectionOneComponent, 
    InfoSectionTwoComponent, 
    InfoSectionThreeComponent,
    FooterComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MessageService]
})
export class HomeModule { }
