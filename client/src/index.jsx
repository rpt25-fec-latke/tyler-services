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
      url: `/reviews?id=${this.state.currentGameId}`,
      success: (data) => {
        console.log(data);
        this.setState({
          reviews: data
        });
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