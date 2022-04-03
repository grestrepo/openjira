import React, {useReducer} from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
} 

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false
};

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const UIProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openSideMenu = () => dispatch({type: 'UI - Open Sidebar'});
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });
  const setIsAddingEntry = (value: boolean) => (
    dispatch({type: 'UI - Adding Entry', payload: value}
  ));
  return (
    <UIContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry
    }}>
      {children}
    </UIContext.Provider>
  );
};