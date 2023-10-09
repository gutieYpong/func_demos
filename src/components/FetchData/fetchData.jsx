import { useState, useEffect } from "react";
import { Button, Container, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from "axios";


const FetchData = ({ initialRef }) => {
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
    <>
      <FormControl
        mb={4}
        onSubmit={ event => {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <FormLabel>Fetch Box</FormLabel>
        <Stack direction={'row'}>
          <Input
            // ref={ref}  //* should using `forwardRef()` to explicitly forward the ref
            // ref={initialRef}  //* this works
            ref={(inputRef) => {  //* manually forwarding the ref
              if (initialRef) {
                initialRef.current = inputRef;
              }
            }}
            placeholder="Fetch..."
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

export default FetchData;