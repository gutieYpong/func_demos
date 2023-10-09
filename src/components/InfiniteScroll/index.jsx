import { useState, useRef, useCallback } from 'react';
import { Container, FormControl, FormLabel, Input } from '@chakra-ui/react';

import useBookSearch from './hooks/useBookSearch'


const InfiniteScroll = ({ initialRef }) => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (evnet) => {
    setQuery(evnet.target.value);
    setPageNumber(1);
  };

  return (
    <>
      <FormControl mb={4}>
        <FormLabel>Search Box</FormLabel>
        <Input
          ref={initialRef}
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
        />
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
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={book} className="the-ref">
                {book}
              </div>
            );
          } else {
            return <div key={book}>{book}</div>;
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </Container>
    </>
  );
};

export default InfiniteScroll;
