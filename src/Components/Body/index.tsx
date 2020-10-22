import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Header';
import axios from 'axios';
import Images from '../Images';
import { IPhoto } from '../types';
import StyledMain from './styled/StyledMain';
import Loading from './styled/Loading';

const Body = () => {
  const [isQuery, setIsQuery] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IPhoto[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchUrl, setFetchUrl] = useState<string>(
    'https://api.unsplash.com/photos?per_page=30&page=1'
  );
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };
  const fetchData = useCallback(
    async (url: string) => {
      try {
        const response = await axios({
          method: 'GET',
          url: url,
          headers: {
            'Accept-version': 'v1',
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
          },
        });
        if (isQuery) {
          if (page === 1) {
            setData(response.data.results);
          } else if (page > 1) {
            setData([...data, ...response.data.results]);
            console.log(data);
          }
        } else {
          if (page === 1) {
            setData(response.data);
          } else if (page > 1) {
            setData([...data, ...response.data]);
          }
        }
        setIsFetching(false);
        setPage(page + 1);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [data, isQuery, page]
  );
  useEffect(() => {
    if (!isFetching) return;
    if (!isQuery) {
      fetchData(`https://api.unsplash.com/photos?per_page=30&page=${page}`);
    } else {
      let quer = fetchUrl.slice(fetchUrl.indexOf('&'));
      fetchData(`https://api.unsplash.com/search/photos?per_page=30&page=${page}${quer}`);
    }
  }, [isFetching, fetchUrl, isQuery]);
  useEffect(() => {
    if (!isQuery) {
      fetchData('https://api.unsplash.com/photos?per_page=30&page=1');
    } else {
      setPage(1);
      fetchData(fetchUrl);
    }
  }, [fetchUrl, isQuery]);

  return (
    <StyledMain>
      <Header setFetchUrl={setFetchUrl} setIsQuery={setIsQuery} setPage={setPage} />
      {!isLoading ? <Images data={data} /> : <Loading>Loading...</Loading>}
    </StyledMain>
  );
};

export default Body;
