import { createContext } from 'react';

interface Props {
  sidebarOpen: boolean;

  toogleSidebarOpen: () => void;
}

export const UiContext = createContext({} as Props);
