import { Injectable } from '@angular/core';
import { MsManager } from '../@types/ms-manager';
import { Observable } from 'rxjs';
import { MsComment } from '../@types/ms-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentManagerService implements MsManager<MsComment> {
  collection: any[];
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any, modificator: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
