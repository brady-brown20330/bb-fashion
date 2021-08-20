import './App.css';
import Stack from './sdk/entry';
import React from 'react';
// Components
import Loading from './components/Loading';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      header: undefined,
      footer: undefined,
      products: undefined,
    }
  }

  render() {
    if (this.state.loading === true) return <Loading text="Loading" />

    return (
      <div>
        Hello World
      </div>
    )
  }

  async componentDidMount() {
    const header = await Stack.getEntry('header')
    const footer = await Stack.getEntry('footer')
    const products = await Stack.getEntry('product')
    this.setState({
      header: header[0],
      loading: false,
      footer: footer[0],
      products: products[0]
    })
    console.log('State: ', this.state)
  }
}

export default App;
