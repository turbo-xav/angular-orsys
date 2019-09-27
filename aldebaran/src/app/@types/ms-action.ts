import { ActionTypes } from '../services/action-types.enum';

/**
 * Fonctionnal Action required by the UI
 */

export interface MsAction {
  type: ActionTypes;
  data: any;
  result?: any;
}
