import { UiState } from '.';

enum UiActionType {
  TOGGLE_SIDEBAR = 'Toogle Sidebar Open'
}

type UiAction = { type: UiActionType.TOGGLE_SIDEBAR };

export const uiReducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case UiActionType.TOGGLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen };

    default:
      return state;
  }
};
