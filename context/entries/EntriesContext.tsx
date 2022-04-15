import {createContext} from 'react';

import { Entry } from '../../interfaces';

interface EntriesContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => Promise<void>;
  updateEntry: (entry: Entry) => Promise<void>;
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps);