import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; //must be actual relative path

const API_KEY = 'AIzaSyBe4F0kE13Dngw8RQ95vneuaXurbcw3omo';
const App = () => {
  return (  // use parenthesis to use multi line jsx
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
