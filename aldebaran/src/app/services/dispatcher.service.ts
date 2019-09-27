import { Injectable } from '@angular/core';
import { MsFacade } from '../@types/ms-facade';
import { MsAction } from '../@types/ms-action';
import { Observable, of as observableCreator } from 'rxjs';
import { map} from 'rxjs/operators';
import { ActionTypes } from './action-types.enum';
import { ImageSearchService } from './image-search.service';
import { CommentManagerService } from './comment-manager.service';
import { UserManagerService } from './user-manager.service';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService implements MsFacade {

  public action$ = new EventEmitter<MsAction>();

  constructor(
    private imageService: ImageSearchService,
    private commentService: CommentManagerService,
    private userService: UserManagerService,
    ) { }

  dispatch(action: MsAction): Observable<MsAction> {

    this.action$.emit(action);

    const convertToAction = result => {
      action.result = result;
      return action;
    };

    switch (action.type) {
      case ActionTypes.DATA_GET_HOME_CONTENT:
          return this.imageService.search(action.data || 'all', 4).pipe( map( convertToAction ) );
      case ActionTypes.DATA_GET_COMMENTS:
          return observableCreator(action);
      case ActionTypes.DATA_GET_SEARCH_CONTENT:
          return this.imageService.search(action.data || 'all').pipe( map( convertToAction ) );
      case ActionTypes.DATA_SEARCH:
          this.imageService.keyword = action.data;
          return observableCreator(action);
          //return this.imageService.search().pipe( map( convertToAction ) );
      case ActionTypes.DATA_SELECT_CONTENT:
          return this.imageService.getImage('PIA06706').pipe( map( convertToAction ) );
      case ActionTypes.USER_ADD_COMMENT:
          return observableCreator(action);
      case ActionTypes.USER_LOGIN:
          return observableCreator(action);
      default:
          return observableCreator(action);
    }
  }
}
