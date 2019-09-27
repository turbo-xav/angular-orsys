import { Observable } from 'rxjs';

/**
 * Generic Data Manager
 */

export interface MsManager<T> {


  /**
   * Return a collection
   */

  collection: T[];

/**
 * Add new Item
 * @param item : new Item
 */

  add(item: T): Observable<T>;
/**
 * Remove new Item
 * @param item : new Item
 */
  remove(item: T): Observable<T>;

  /**
   * Update existing Item
   * @param item : old Item
   * @param item : target Item
   */


  update(item: T, modificator: T): Observable<T>;

}
