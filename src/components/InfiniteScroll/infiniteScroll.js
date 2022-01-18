import React, { useState, useRef, useCallback } from 'react'

import MainSectionContainer from '../mainSectionContainer';
import useBookSearch from './hooks/useBookSearch';

import TextField from '@mui/material/TextField';


const InfiniteScroll = () => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch( query, pageNumber );

  const lastBookElementRef = useCallback( node => {
    if( loading ) return;
    if( observer.current ) observer.current.disconnect();

    observer.current = new IntersectionObserver( entries => {
      if( entries[0].isIntersecting && hasMore )
      {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });

    if( node ) observer.current.observe( node );
  }, [loading, hasMore] );

  const handleSearch = ( evnet ) => {
    setQuery( evnet.target.value );
    setPageNumber( 1 );
  };

  return (
    <MainSectionContainer>
      <TextField 
        label="Fetch"
        size="small"
        value={ query }
        onChange={ handleSearch }
      />
      {
        books.map( ( book, index ) => {
          if( books.length === index + 1 )
          {
            return <div ref={ lastBookElementRef } key={ book } className="the-ref">{ book }</div>
          }
          else
          {
            return <div key={ book }>{ book }</div>
          }
        })
      }
      <div>{ loading && 'Loading...' }</div>
      <div>{ error && 'Error' }</div>
    </MainSectionContainer>
  );
};

export default InfiniteScroll;