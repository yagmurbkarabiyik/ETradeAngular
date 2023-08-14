import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    LayoutComponent
    ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
