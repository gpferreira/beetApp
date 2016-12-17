/**
 * Created by gustavoferreira on 12/6/16.
 */

import type { Action } from './types';

type Tab = 'dashboard' | 'athletes' | 'expenses' | 'contracts' | 'notifications';

module.exports = {
  switchTab: (tab: Tab): Action => ({
    type: 'SWITCH_TAB',
    tab,
  })
};
