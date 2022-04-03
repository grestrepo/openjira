import {EntriesState} from './';
import { Entry } from '../../interfaces';

type EntriesActions = 
  | { type: '[Entry] - Add-Entry', payload: Entry };

export const entriesReducer = (state: EntriesState, action: EntriesActions): EntriesState => {
  
  switch (action.type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      };
  
    default:
      return state;
  }

};