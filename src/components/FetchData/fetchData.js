import { useState, useEffect } from "react";
import axios from "axios";

import MainSectionContainer from '../mainSectionContainer';
import Form from './layouts/Form'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FetchData = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    const fetchData = async() => {
      setIsError( false );
      setIsLoading( true );

      try {
        const result = await axios( url );

        setData( result.data );
      } catch ( error ) {
        setIsError( true );
      }

      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  return (
    <MainSectionContainer>
      <Form
        onSubmit={ event => {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
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
          type="submit"
          size="normal"
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

export default FetchData;