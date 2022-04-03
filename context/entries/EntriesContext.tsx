import {createContext} from 'react';

import { Entry } from '../../interfaces';

interface EntriesContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps);