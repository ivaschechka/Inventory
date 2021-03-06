import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { Ng2Webstorage } from 'ngx-webstorage';

import { NotificationService } from './notification.service';
//import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2Webstorage.forRoot({ prefix: 'inventoryapp', separator: '.' }),
  ],
  providers: [
    NotificationService,
    //StorageService
  ],
  declarations: []
})
export class CoreModule { }
