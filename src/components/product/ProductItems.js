import React, { Component } from 'react';
import './productitem.css';

// components 



class ProductItems extends Component {


  render()
  {
    const allProducts = this.props.allProducts
    

    // console.log(contProducts)
    return (
        <div className="row">
            { allProducts.map((product,index)=> {
        // console.log(product)
        return (<div className="col-md-4 p-2 mb-3" key={index}>
                    <div className="text-center border">
                        <div className="thumbnail text-center pointer" >
                            <img src={'products/'+product.sku+'_1.jpg'} height="300" className="mt-3" />
                        </div>
                        <h5>{product.title} </h5>
                        <h5>{product.price} $</h5>
                        <button className="btn btn-primary mt-2 mb-2" 
                        onClick={()=>{this.props.handleAddToCart(product)}}> Add To Cart <i className="fa fa-plus"></i> </button>
                    
                    </div>
                </div>)
        
                })}
        </div>
    );
  }
  
}

export default ProductItems;
