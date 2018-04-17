import React, {
  Component
} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };  // inside constructor we can set an object to state
    // everywhere else we should use this.setState({object})
  }
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        <p>Value of the input: {this.state.term}</p>
      </div>

    ) ;
  }
}

export default SearchBar;
