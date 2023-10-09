import { useState } from "react";
import { Button, Container, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

import useDataApi from "./reducers/useDataAPI";


const FetchDataUseReducer = ({ initialRef }) => {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  return (
    <>
      <FormControl
        mb={4}
        onSubmit={ event => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <FormLabel>Fetch Box</FormLabel>
        <Stack direction={'row'}>
          <Input
            ref={initialRef}
            placeholder="Fetch w/ hook..."
            value={ query }
            onChange={ event => setQuery( event.target.value ) }
          />
          <Button
            colorScheme='teal'
            variant='solid'
            type="submit"
            size="md"
          >
            Fetch
          </Button>
        </Stack>
      </FormControl>

      <Container
        w={'75%'}
        minH={'300px'}
        border={'5px dashed #000000'}
        textAlign={'center'}
        overflowY={'scroll'}
        p={4}
        sx={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#C4A8E3',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#814AA7',
          },
        }}
      >
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
      </Container>
    </>
  );
}

export default FetchDataUseReducer;