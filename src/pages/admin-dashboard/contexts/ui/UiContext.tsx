import { createContext } from 'react';

interface Props {
  isSideBarOpen: boolean;

  toogleSidebarOpen: () => void;
}

export const UiContext = createContext({} as Props);
