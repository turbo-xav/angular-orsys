import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedCardComponent } from './shared-card/shared-card.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';



@NgModule({
  declarations: [SharedCardComponent, SharedButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SharedCardComponent,
    SharedButtonComponent,
    FormsModule
  ]
})
export class SharedModule { }
