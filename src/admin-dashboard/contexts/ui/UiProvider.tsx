import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from '.';

export interface UiState {
  sidebarOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  sidebarOpen: false
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
