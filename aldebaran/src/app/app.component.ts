import { Component, ViewChild, OnInit } from '@angular/core';
import { SharedCardComponent } from './shared/shared-card/shared-card.component';
import { DispatcherService } from './services/dispatcher.service';
import { Router } from '@angular/router';
import { MsAction } from './@types/ms-action';
import { ActionTypes } from './services/action-types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Aldebaran';

  @ViewChild(SharedCardComponent, {static:true} ) card:SharedCardComponent;

  ngOnInit(): void {
    console.log(this.cardActionHandler);
  }

  cardActionHandler(data: any) {
    console.log('data', data);
  }

  public constructor(
    private router: Router,
    private dispatcher: DispatcherService) {
      this.dispatcher.action$.subscribe(
        (action: MsAction) => {
          if ( action.type === ActionTypes.DATA_SEARCH ) {
            this.router.navigate(['list']);
          }
        }
      );
  }

}
