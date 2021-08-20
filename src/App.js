import './App.css';
import Stack from './sdk/entry';
import React from 'react';
// Components
import Loading from './components/Loading';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Products } from './components/Products';

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
      <div className='App'>
        <Header header={this.state.header} />
          <Products products={this.state.products} />
        <Footer footer={this.state.footer} />
      </div>
    )
  }

  async componentDidMount() {
    const header = await Stack.getEntry('header')
    const footer = await Stack.getEntry('footer')
    const products = await Stack.getEntry('product')
    this.setState({
      header: header[0][0],
      footer: footer[0][0],
      products: products[0]
    })

    if (this.state.header === undefined) {
      this.setState({
        loading: true
      })
    } else {
      this.setState({
        loading: false
      })
    }
    console.log('State: ', this.state)
  }
}

export default App;
