import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';

class App extends Component {

  state = {
    user: {
      name: '',
      city: '',
      zipCode: '',
    }
  };
  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      }
    });
  }
  handleCityChange = (event) => {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value,
      }
    });
  }
  handleButtonClick = (event) => {
    console.log(this.state);

  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {JSON.stringify(this.state)}
        <br />
        {this.state.user.name} is from {this.state.user.city}

        <br />
        <input value={this.state.user.name} onChange={this.handleNameChange} />
        <input value={this.state.user.city} onChange={this.handleCityChange} />
        <button value={this.state} onClick={this.handleButtonClick} >React</button>
      </div>
    );
  }
}

export default App;
