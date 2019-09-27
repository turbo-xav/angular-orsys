import { Component, OnInit, OnDestroy } from '@angular/core';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { MsAction } from 'src/app/@types/ms-action';
import { ActionTypes } from 'src/app/services/action-types.enum';
import { Subscription } from 'rxjs';
import { MsImage } from 'src/app/@types/ms-image';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  private data$: Subscription;

  image: MsImage;


  constructor(private dispatacherServive: DispatcherService) { }

  ngOnInit() {
    const action: MsAction = { type: ActionTypes.DATA_SELECT_CONTENT, data: null};
    this.data$ = this.dispatacherServive.dispatch(action).subscribe(
      (msAction: MsAction): void => {
        this.image = msAction.result;
        console.log(msAction);
      }
      );
  }

  ngOnDestroy() {
    this.data$.unsubscribe();
  }

}
