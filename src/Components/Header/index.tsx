import React, { useState } from 'react';
import SearchButton from './styled/SearchButton';
import SearchInput from './styled/SearchInput';
import SearchWrapper from './styled/SearchWrapper';

const Header = ({ ...props }) => {
  const [query, setQuery] = useState<string>('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const setQueried = () => {
    props.setFetchUrl(`https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}`);
    props.setIsQuery(true);
    props.setPage(1);
  };
  const enterSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      setQueried();
    }
  };
  return (
    <SearchWrapper>
      <SearchButton onClick={setQueried} />
      <SearchInput
        onChange={(e) => handleInput(e)}
        onKeyPress={enterSearch}
        placeholder="Search photo"
      />
    </SearchWrapper>
  );
};

export default Header;
