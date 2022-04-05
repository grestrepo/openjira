import React, {FC, useEffect, useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

import {EntriesContext, entriesReducer} from './';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

const Entries_initial_state: EntriesState = {
  entries: []
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
      createdAt: Date.now()
    };

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };
  const updateEntry = (entry: Entry) => {
    dispatch({type: '[Entry] - Update-Entry', payload: entry});
  };

  const refreshEntries = async () => {
    const resp = await entriesApi.get<Entry[]>('/entries');
    console.log(resp.data);
    dispatch({type: '[Entry] - REFRESH-DATA', payload: resp.data});
  };

  useEffect(() => {
    refreshEntries();
  }, []);
  

  return (
    <EntriesContext.Provider value={{...state, addNewEntry, updateEntry}}>
      {children}
    </EntriesContext.Provider>
  );
};