import { UiState } from './';

type UiAction = { type: '[UI] - Toggle Sidebar Open' };

export const uiReducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case '[UI] - Toggle Sidebar Open':
      return { ...state, sidebarOpen: !state.sidebarOpen };

    default:
      return state;
  }
};
