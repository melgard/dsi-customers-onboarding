import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

const primengModules = [
  NgxSpinnerModule
];

@NgModule({
  imports: [
    ...primengModules
  ],
  exports: [
    ...primengModules
  ]
})
export class SharedModule { }
