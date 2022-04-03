import {createContext} from 'react';

export type ContextProps = {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (value: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext<ContextProps>({} as ContextProps);