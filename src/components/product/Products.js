import React, { Component, Fragment } from 'react';
import axios from 'axios';

// components 
import ProductItems from './ProductItems';
import Filter from '../filter/Filter';


class Products extends Component {

    
    state = {
        products:[],
        filterdProducts:[],
        loading:false,
      }

    componentDidMount = () =>
    {
        axios.get("http://localhost:3000/db.json").then((res) => 
        {
             const {products} = res.data;
             this.setState({
                 products:products,
                 filterdProducts:products,
                 loading:true
             })

            //  console.log(products)
        }).catch((error) => console.log(error))
    }

    handleAddToCart = (product) => {
        // console.log(product)
        this.setState(state => {
            const cartItems = this.props.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach(item => {
                if(item.id === product.id)
                {
                    productAlreadyInCart = true;
                    item.count++;
                    // console.log(item) 
                }
            });
            if(!productAlreadyInCart)
            {
                cartItems.push({...product,count:1})
            }
            // update cart items at app file 
            this.props.updateCartItems(cartItems);

            return cartItems;
        })
    }


    // sort by price
    handleChangeSort = (e) =>{
        this.setState({sort:e.target.value})
        this.listProducts();
    }
    // sort by size
    // handleChangeSize = (e) =>{
    //     this.setState({size:e.target.value})
    //     this.listProducts();
    // }

    listProducts = ()=>
    {
        this.setState(state =>{
            if(state.sort !== '')
            {
                // state.products.sort((a,b)=>{(state.sort ==='lowest') ? (a.price < b.price ? 1:-1 ) : (a.price > b.price ? 1:-1 )} );
                if(state.sort ==='lowest')
                {
                    state.products.sort((a,b)=>(a.price > b.price ? 1:-1 ));
                }
                else 
                {
                    state.products.sort((a,b)=>(a.price < b.price ? 1:-1 ));
                }
                
            }
            // if(state.size !== '')
            // {
            //     return {
            //         filterdProducts:state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase())>=0)
            //     }
            // }
            else 
            {
                state.products.sort((a,b)=>(a.id < b.id  ? 1:-1 ));
            }

            
            return {filterdProducts:state.products}
        })
    }


    
    render()
    {
        if(this.state.loading)
        {
            return (
                <Fragment>
                <Filter sort={this.state.sort} 
                    handleChangeSort={this.handleChangeSort}  
                    count={this.state.filterdProducts.length} />
                    <hr />
                 
                <ProductItems allProducts={this.state.products} handleAddToCart={this.handleAddToCart}  /> 
                </Fragment>
            );
        }
        else
        {
            return <div></div>
        }
        
    }
 
}

export default Products;
