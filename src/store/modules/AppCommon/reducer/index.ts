import {AppCommonActions, AppStateType} from '@store/modules/AppCommon/actions';
import produce from 'immer';

export interface State {
  isAppLoaded: boolean;
  isAppInitialized: boolean;
  appState: AppStateType | null;
}

type Actions = ReturnType<typeof AppCommonActions.APP_INITIALIZED.STATE.create>;

const INITIAL_STATE: State = {
  isAppLoaded: false,
  isAppInitialized: false,
  appState: 'active',
};

export function appCommonReducer(
  state = INITIAL_STATE,
  action: Actions,
): State {
  return produce(state, draft => {
    switch (action.type) {
      case AppCommonActions.APP_INITIALIZED.STATE.type:
        draft.isAppInitialized = true;
        break;
    }
  });
}
