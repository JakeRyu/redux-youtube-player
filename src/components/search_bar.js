import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: 'Search'
    }; // inside constructor we can set an object to state
    // everywhere else we should use this.setState({object})
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}/>
    </div>);
  }
}

export default SearchBar;
