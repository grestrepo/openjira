import {EntriesState} from './';
import { Entry } from '../../interfaces';

type EntriesActions = 
  | { type: '[Entry] - Add-Entry', payload: Entry }
  | { type: '[Entry] - Update-Entry', payload: Entry }
  | { type: '[Entry] - REFRESH-DATA', payload: Entry[] }

export const entriesReducer = (state: EntriesState, action: EntriesActions): EntriesState => {
  
  switch (action.type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      };

    case '[Entry] - Update-Entry':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if(entry._id === action.payload._id){
            entry.description = action.payload.description;
            entry.status = action.payload.status;
          }
          return entry;
        })
      };

    case '[Entry] - REFRESH-DATA':
      return {
        ...state,
        entries: action.payload
      };
  
    default:
      return state;
  }

};