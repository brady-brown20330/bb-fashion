import './App.css';
import Stack from './sdk/entry';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import Loading from './components/Loading';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import Nav from './components/Nav';
import { ProductPage } from './components/ProductPage';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      header: undefined,
      footer: undefined,
      products: undefined,
      navFilter: undefined,
    }  

  }    
  
  handleNavClick = (e) => {
      this.setState({
        navFilter: e.target.firstChild.nodeValue
      })
    }

    handleFilterReset = () => {
      this.setState({
        navFilter: undefined
      })
    }


  render() {
    if (this.state.loading === true) return <Loading text="Loading" />

    return (
      <Router>
        <div className='App'>
          <Header header={this.state.header} />
           <Switch>
             <Route
             exact path='/'
             render={(props) => (
               <div>
                 <Nav products={this.state.products} handleNavClick={this.handleNavClick.bind(this)} handleFilterReset={this.handleFilterReset.bind(this)}/>
                 <Products products={this.state.products} filter={this.state.navFilter}/>
               </div>
             )}
             />
            <Route 
            to='/products/'
            render={(props) => (
              <ProductPage  products={this.state.products} />
            )}
            />
           </Switch>
          <Footer footer={this.state.footer} />
        </div>
      </Router>
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
