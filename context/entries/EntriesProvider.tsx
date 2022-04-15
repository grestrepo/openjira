import React, {FC, useEffect, useReducer} from 'react';

import {EntriesContext, entriesReducer} from './';
import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';

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
  const addNewEntry = async (description: string) => {
    const resp = await entriesApi.post<Entry>('/entries', {description});

    dispatch({ type: '[Entry] - Add-Entry', payload: {
      _id: resp.data._id,
      createdAt: resp.data.createdAt,
      description: resp.data.description,
      status: resp.data.status
    }});
  };
  const updateEntry = async ({_id, status, description}: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        status,
        description
      });
      dispatch({type: '[Entry] - Update-Entry', payload: data});
    } catch (error) {
      
    }
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