import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MsImage } from 'src/app/@types/ms-image';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { MsAction } from 'src/app/@types/ms-action';
import { ActionTypes } from 'src/app/services/action-types.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private data$: Subscription;

  images: MsImage[];

  constructor(private dispatacherService: DispatcherService) { }

  ngOnInit() {

    this.dispatacherService.action$.subscribe(
       (action: MsAction) => {
         if (action.type === ActionTypes.DATA_SEARCH) {
           this.getContentList(action.data);
         }
       }

    );
  }

  getContentList(data: any) {
  const action: MsAction = { type: ActionTypes.DATA_GET_SEARCH_CONTENT, data};
  this.data$ = this.dispatacherService.dispatch(action).subscribe(
      (msAction: MsAction): void => {
        this.images = msAction.result;
        console.log(msAction);
      }
      );
  }

  ngOnDestroy() {
    if(this.dispatacherService.action$) {
      this.dispatacherService.action$.unsubscribe();
    }   // this.data$.unsubscribe();
  }

}
