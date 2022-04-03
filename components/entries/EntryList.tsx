/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({status}) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => {
    return entries.filter(entry => entry.status === status);
  }, [entries]);
  return (
    <div>
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflowY: 'scroll',
        background: 'transparent',
        padding: '3px 5px',
        '&::-webkit-scrollbar': { display: 'none' }
        }}
        elevation={5}
      >
        <List sx={{opacity: 1}}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }          
        </List>
      </Paper>
    </div>
  );
};
