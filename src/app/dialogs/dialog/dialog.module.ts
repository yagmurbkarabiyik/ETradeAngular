import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';


@NgModule({
  declarations: [
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule,
    FileUploadModule
  ]
})
export class DialogModule { }