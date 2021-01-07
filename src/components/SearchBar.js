import React, { useState } from 'react';

// useEffect only uses for lifecycle method.

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // }

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term); // argument
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form"> 
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// class SearchBar extends React.Component {
//   state = { term: '' };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   }

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     this.props.onFormSubmit(this.state.term);
//   }

// }
