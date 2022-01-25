import { useState } from "react";

import useDataApi from "./hooks/useDataAPI";
import MainSectionContainer from "../mainSectionContainer";
import Form from "./layouts/Form";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FetchDataHook = () => {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  return (
    <MainSectionContainer>
      <Form
        onSubmit={ event => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <TextField 
          label="Fetch"
          size="small"
          value={ query }
          onChange={ event => setQuery( event.target.value ) }
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          children="Search"
          margin="normal"
          type="submit"
        />
      </Form>
      {
        isError && <div>Something went wrong ...</div>
      }
      {
        isLoading ? (
          <div>Loading ...</div>
        ) : (
        <ul>
          {
            data.hits.map( item => (
              <li key={ item.objectID }>
                <a href={ item.url }>{ item.title }</a>
              </li>
            ))
          }
        </ul>
        )
      }
    </MainSectionContainer>
  );
}

export default FetchDataHook;