import { Injectable } from '@angular/core';
import { Observable, of as observableCreator } from 'rxjs';
import { MsImage } from '../@types/ms-image';

import * as jsonDatas from './mocks/dataset.json';
import { NetService } from './net.service';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  private cache = new Map();
  // tslint:disable-next-line: variable-name
  public _keyword = 'all';

  public set keyword(keyword) {
    if ( keyword === 'nibiru' ) {
      return;
    }
    this._keyword = keyword;
  }

  public get keyword() {
    return this._keyword;
  }

  constructor(
    private netService: NetService
  ) { }

  search(keyword = this.keyword, limit = 100): Observable<MsImage[]> {

    const conformDatas = datas => datas.map(
      item => {
        const msImage: MsImage = {
          id: item.data[0].nasa_id,
          title: item.data[0].title,
          url: item.links[0].href,
          description: item.data[0].description
        };
        return msImage;
      }
    );

    return this.netService.get(environment.NASA_API + keyword).pipe(
      map( res => res.collection.items ),
      map( conformDatas ),
      map( items => items.splice(0, limit) ),
      tap( res => { this.cache.set(keyword, res); } )
    );
  }

  getImage(nasaId: string): Observable<MsImage> {
    return this.search().pipe(
      map(res => res.filter( item => item.id === nasaId)[0]
    )
      );
  }
}
