import { DragEvent, FC, useContext } from 'react';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardActions, 
  Typography 
} from '@mui/material';

import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({entry}) => {

  const {startDragging, endDragging} = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  };

  const onDragEnd = (event: DragEvent) => {
    endDragging();
  };

  return (
    <Card 
      draggable 
      sx={{marginBottom: 1}} 
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace: 'pre-line'}}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions sx={{
          display: 'flex', 
          justifyContent: 'flex-end', 
          paddingRight: 2
        }}>
          <Typography variant="body2">Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  );
};
