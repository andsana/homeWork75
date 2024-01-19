import React, { useState } from 'react';
import { Vigenere } from '@/types';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  onSubmit: (vigenere: Vigenere, action: 'encode' | 'decode') => void;
  isLoading: { encode: boolean; decode: boolean };
  result: string;
}

const VigenereForm: React.FC<Props> = ({onSubmit, isLoading, result}) => {
  const [state, setState] = useState<Vigenere>({
    password: '',
    encoded: '',
    decoded: '',
  });

  const submitEncodeHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(state, 'encode');
  };

  const submitDecodeHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(state, 'decode');
  };


  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            required
            id="decoded" label="decoded"
            name="decoded"
            value={state.decoded || result}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="password" label="Password"
            name="password"
            value={state.password}
            onChange={inputChangeHandler}
            sx={{width: '300px', mr: '20px'}}
          />
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading.encode}
            loading={isLoading.encode}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
            onClick={submitEncodeHandler}
            sx={{mr: '20px'}}
          >
            Down
          </LoadingButton>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading.decode}
            loading={isLoading.decode}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
            onClick={submitDecodeHandler}
            sx={{mr: '20px'}}
          >
            Up
          </LoadingButton>
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="encoded" label="encoded"
            name="encoded"
            value={state.encoded || result}
            onChange={inputChangeHandler}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default VigenereForm;
