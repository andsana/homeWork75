import React, { useState } from 'react';
import { Vigenere } from '@/types';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  onSubmit: (vigenere: Vigenere, action: 'encode' | 'decode') => void;
  isLoading: boolean;
}

const VigenereForm: React.FC<Props> = ({onSubmit, isLoading}) => {
  const [state, setState] = useState<Vigenere>({
    password: '',
    encodedMessage: '',
    decodedMessage: '',
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
            id="password" label="Password"
            name="password"
            value={state.password}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="encodedMessage" label="encodedMessage"
            name="encodedMessage"
            value={state.encodedMessage}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="decodedMessage" label="decodedMessage"
            name="decodedMessage"
            value={state.decodedMessage}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
            onClick={submitEncodeHandler}
          >
            Down
          </LoadingButton>
        </Grid>
        <Grid item xs>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
            onClick={submitDecodeHandler}
          >
            Up
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default VigenereForm;