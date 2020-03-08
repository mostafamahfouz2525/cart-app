import React, { Component } from 'react';

// components 
import Nav from './components/nav/Nav';
import Products from './components/product/Products';
import Basket from './components/basket/Basket';

// import {Provider} from 'react-redux';
// import store from './store/store';



class App extends Component {


    state = {
      cartItems:[]
    }
    updateCartItems = (items) => 
    {
       this.setState({
         cartItems:items
       })

       localStorage.setItem("cartItems",JSON.stringify(items));
    }

    handleRemoveFromCart = (item) => 
    {
       const newItems = this.state.cartItems;
       newItems.splice(newItems.indexOf(item), 1 );
      //  console.log(newItems)

       this.setState({
         cartItems:newItems
       })

       localStorage.setItem("cartItems",JSON.stringify(newItems))
    }

    componentDidMount  = ()=>
    {
      // if(localStorage.getItem("cartItems") && localStorage.getItem("cartItems") != '')
      // {
        this.setState({
          cartItems:JSON.parse(localStorage.getItem("cartItems"))
        })
      // }
       
    }
  render()
  {
    return (
      // <Provider store={store}>
      <div className="container-fluid">
        
        <Nav />
        
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <Products cartItems={this.state.cartItems} updateCartItems={this.updateCartItems} />
          </div>
          <div className="col-md-4 col-sm-12">
            
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>
        </div>

      </div>
      // </Provider>
    );
  }
  
}

export default App;
