import React, { Component } from 'react';
import SearchResultItem from '../../components/search-result-item/SearchResultItem';

class SearchResult extends Component {
    render() {
      return (
      <div className='search-result-item'>
          <SearchResultItem/>
          <SearchResultItem/>
          <SearchResultItem/>
      </div>
      );
    }
  }

  export default SearchResult;