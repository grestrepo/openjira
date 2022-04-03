import React, {FC, useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

import {EntriesContext, entriesReducer} from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

const Entries_initial_state: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'pending: Descripción de la entry 1',
      status: 'pending',
      createAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'in-progress: Descripción de la entry 2',
      status: 'in-progress',
      createAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description: 'finished: Descripción de la entry 3',
      status: 'finished',
      createAt: Date.now() - 100000
    }
  ]
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_initial_state);
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createAt: Date.now()
    };

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };
  return (
    <EntriesContext.Provider value={{...state, addNewEntry}}>
      {children}
    </EntriesContext.Provider>
  );
};