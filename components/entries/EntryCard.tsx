import { FC } from 'react';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardActions, 
  Typography 
} from '@mui/material';
import { Entry } from '../../interfaces';

interface Props {
  entry: Entry
}


export const EntryCard: FC<Props> = ({entry}) => {
  return (
    <Card sx={{
      marginBottom: 1,
      //eventod de drag
    }}>
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
