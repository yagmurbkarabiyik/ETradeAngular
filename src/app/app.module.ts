import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import {  HttpClientModule } from '@angular/common/http';
import { DeleteDirective } from './directive/admin/delete.directive';
import { FileUploadDialogComponent } from './dialogs/file-upload-dialog/file-upload-dialog.component';

@NgModule({
  declarations: [
    AppComponent
    
      ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    UiModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    {provide: "baseUrl", useValue:"https://localhost:7177/api", multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
