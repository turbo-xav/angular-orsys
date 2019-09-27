import { Component, OnInit, OnDestroy } from '@angular/core';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { MsAction } from 'src/app/@types/ms-action';
import { ActionTypes } from 'src/app/services/action-types.enum';
import { Observable, Subscription } from 'rxjs';
import { MsImage } from 'src/app/@types/ms-image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private data$: Subscription;



  images: MsImage[];

  constructor(private dispatacherServive: DispatcherService) { }

  ngOnInit() {
    const action: MsAction = { type: ActionTypes.DATA_GET_HOME_CONTENT, data: null};
    this.data$ = this.dispatacherServive.dispatch(action).subscribe(
      (msAction: MsAction): void => {
        this.images = msAction.result;
        console.log(msAction);
      }
      );
  }

  ngOnDestroy() {
    this.data$.unsubscribe();
  }
}
