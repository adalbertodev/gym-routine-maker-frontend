import { FC, useReducer } from 'react';

import { UiContext, uiReducer } from '.';

export interface UiState {
  isSideBarOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isSideBarOpen: false
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toogleSidebarOpen = () => {
    dispatch({ type: '[UI] - Toggle Sidebar Open' });
  };

  return <UiContext.Provider value={{ ...state, toogleSidebarOpen }}>{children}</UiContext.Provider>;
};
