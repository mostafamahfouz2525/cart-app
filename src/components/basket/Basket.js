import React, { Component } from 'react'
import './basket.css'

export default class Basket extends Component {


    // showItems = (cartItems) => 
    // {
    //     cartItems.length > 0 && cartItems.map(item =>{
                    
    //         <li>
    //             <b>{item.title}</b>
    //             <button className="btn btn-danger "> <i className="fa fa-trash"></i> </button>
    //         </li>

    //     })
    // }

    render() {

        const {cartItems} = this.props;

        

        return (
            <div className="alert alert-info text-center mt-3">
              
                { cartItems.length === 0 ? "Cart Is Empty":"You Have : " + cartItems.length +"Product In The Basket"}
                
                    <div>
                        <ul className="nav flex-column">
                        
                            {cartItems.map(item=> 
                            <div key={item.id}>
                                <li className="mb-3  p-3 display-5 text-left basket-item">{item.title} 
                                <p>  <b className="text-dark "> {item.count} X </b> 
                                <b className="text-dark "> {item.price} </b></p>
                                 <button className="btn btn-danger remove-item" onClick={()=>{this.props.handleRemoveFromCart(item)}}> 
                                 <i className="fa fa-trash "></i> </button>
                                  </li>
                            </div>

                            )}
                        </ul>
                            <h3>
                        Total : {(cartItems.reduce((total,item) => total + item.price * item.count, 0)).toFixed(2)} $ </h3>
                    </div>
                
            </div>
        )
    }
}
