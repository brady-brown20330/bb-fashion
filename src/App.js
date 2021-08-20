import logo from './logo.svg';
import './App.css';
import Stack from './sdk/entry';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      header: undefined,
    }
  }


  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }

  async componentDidMount() {
    const header = await Stack.getEntry('header', 'en-us')
    this.setState({
      header: header
    })
    console.log('should be the header: ', this.state.header)
  }
}

export default App;
