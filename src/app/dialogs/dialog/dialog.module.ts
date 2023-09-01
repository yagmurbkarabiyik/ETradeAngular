import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    DeleteDialogComponent,
    FileUploadDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class DialogModule { }