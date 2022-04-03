import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const {addNewEntry} = useContext(EntriesContext);
  const {isAddingEntry, setIsAddingEntry} = useContext(UIContext);
  // const [isAdding, setIsAdding] = useState(false);
  
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if(inputValue.length === 0) return;
    console.log(inputValue);
    addNewEntry(inputValue);
    setInputValue('');
    setIsTouched(false);
  };
  
  return (
    <Box sx={{marginBottom: 2, paddingX: 2}}>
      {
        isAddingEntry ? (
          <>
            <TextField 
              fullWidth 
              sx={{ marginTop: 2, marginBottom: 1 }}  
              placeholder="Nueva entrada"
              autoFocus
              multiline
              label="Nueva Entrada"
              helperText={inputValue.length === 0 && isTouched && 'Ingrese un valor'}
              error={inputValue.length === 0 && isTouched ? true : false }
              value={inputValue}
              onChange={onTextChange}
              onBlur={() => setIsTouched(true)}
            />
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
              <Button 
                variant="outlined" 
                color="error"
                onClick={() => setIsAddingEntry(false)}
              >
                Cancelar
              </Button>
              <Button 
                variant="outlined" 
                color="secondary" 
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Box>
          </>
        ) : (
          <Button
            startIcon={<AddIcon />}
            fullWidth
            variant="outlined"
            onClick={() => setIsAddingEntry(true)}
          >Agregar Tarea</Button>
        )
      }
    </Box>
  );
};
