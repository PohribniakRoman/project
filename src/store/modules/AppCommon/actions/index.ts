import {createAction} from '@store/utils/actions/createAction';

export type AppStateType =
  | 'active'
  | 'background'
  | 'inactive'
  | 'unknown'
  | 'extension';

const APP_INITIALIZED = createAction('APP_INITIALIZED', {
  STATE: true,
});

export const AppCommonActions = Object.freeze({
  APP_INITIALIZED,
});
