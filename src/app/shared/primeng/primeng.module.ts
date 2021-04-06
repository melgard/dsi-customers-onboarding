import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import {GalleriaModule} from 'primeng/galleria';

const primengModules = [
  ConfirmDialogModule,
  ButtonModule,
  DialogModule,
  MessageModule,
  SidebarModule,
  TableModule,
  FileUploadModule,
  ToastModule,
  MenubarModule,
  GalleriaModule
];

@NgModule({
    declarations: [],
    imports: [...primengModules],
    exports:[...primengModules],
  //providers:[MessageService]
 })
 export class PrimengModule { }