import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameId: 1,
      reviews: []
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/reviews',
      data: {
        gameId: this.state.currentGameId
      },
      success: (data) => {
        this.setState({
          reviews: data
        });
        console.log(this.state);
      },
      error: (err) => {
        console.log(err);
      }
    });
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