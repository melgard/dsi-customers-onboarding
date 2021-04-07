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
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MegaMenuModule} from 'primeng/megamenu';

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
  GalleriaModule,
  AvatarModule,
  AvatarGroupModule,
  MegaMenuModule

];

@NgModule({
    declarations: [],
    imports: [...primengModules],
    exports:[...primengModules],
  //providers:[MessageService]
 })
 export class PrimengModule { }