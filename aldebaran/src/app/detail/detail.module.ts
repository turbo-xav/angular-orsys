import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { DetailCommentLoginComponent } from './detail-comment-login/detail-comment-login.component';
import { DetailCommentInputComponent } from './detail-comment-input/detail-comment-input.component';
import { DetailCommentListComponent } from './detail-comment-list/detail-comment-list.component';



@NgModule({
  declarations: [DetailComponent, DetailCommentComponent, DetailCommentLoginComponent, DetailCommentInputComponent, DetailCommentListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
