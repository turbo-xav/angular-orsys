import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
