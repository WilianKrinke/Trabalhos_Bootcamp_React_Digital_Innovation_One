import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const Searchfield = () => {
  const [inputValue, setinputValue] = useState('');

  return (
    <>
      <TextField label="Pesquisar Restaurantes" trailingIcon={<MaterialIcon role="button" icon="search" />} outlined>
        <Input value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
      </TextField>
    </>
  );
};

export default Searchfield;
