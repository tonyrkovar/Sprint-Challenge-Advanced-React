import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData';
import { Display } from './components/Display';

class App extends React.Component {
  state = {
    data: []
  }
  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => this.setState({
        data: res.data
      }))
      .catch(err => {
        console.log(err, 'Error')
      })
  }

  render() {
    return (
      <div className="App" data-testid='app-container'>
        {/* This display player information, sorry for bad naming*/}
        <Display key={this.state.id} data={this.state.data} />
      </div>
    );
  }
}

export default App;
