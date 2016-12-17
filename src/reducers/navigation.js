/**
 * Created by gustavoferreira on 12/6/16.
 */

import type { Action } from '../actions/types';

export type Tab =
    'dashboard'
  | 'athletes'
  | 'expenses'
  | 'contracts'
  | 'notifications'
  ;

type State = {
  tab: Tab;
};

const initialState: State = { tab: 'dashboard' };

function navigation(state: State = initialState, action: Action): State {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = navigation;
