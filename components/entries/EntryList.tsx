/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({status}) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);
  const entriesByStatus = useMemo(() => {
    return entries.filter(entry => entry.status === status);
  }, [entries]);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find(e => e._id === id);
    if(!entry) return;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div 
      onDrop={onDropEntry} 
      onDragOver={allowDrop} 
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflowY: 'scroll',
        background: 'transparent',
        padding: '3px 5px',
        '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        <List sx={{opacity: isDragging ? 0.6 : 1, transition: 'all .3s'}}>
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
