import {RootState} from '@store/rootReducer';

export const isAppInitializedSelector = (state: RootState) =>
  state.appCommon.isAppInitialized;
