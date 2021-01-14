import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Submit</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));