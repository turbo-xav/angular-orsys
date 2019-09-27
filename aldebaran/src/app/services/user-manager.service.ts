import { Injectable } from '@angular/core';
import { MsManager } from '../@types/ms-manager';
import { MsUser } from '../@types/ms-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService implements MsManager<MsUser> {
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
