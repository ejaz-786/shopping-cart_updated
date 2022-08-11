import React, {useContext } from 'react'
import Navbar from './Navbar';
import data from '../Data'
import '../CSS/Cart.css'
import {UserContext} from '../App'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';





const Cart = () => {
  const user = useContext(UserContext)

   const increament = (event) =>{
   let bt_id = event.target.id;
      user.arr.map(item => {
          if(bt_id == item.Id){
            item.quant++;
            item.Price = data[bt_id].price * item.quant;
          }
        
          user.setArr([...user.arr]);
        });
    }

    const decreament = (event)=>{
   
      let bt_id = event.target.id;
   
      user.arr.map(item =>{
        if(bt_id == item.Id){
          item.quant--;
          item.Price = data[bt_id].price * item.quant;
        }
        if(item.quant >0){
          user.setArr([...user.arr]);
        }
      
       })
    }

    const empty_cart = (event)=>{
      
      user.setArr([]);

    }

    const Deletes = (event)=>{

      document.querySelector('.sub-cart').remove();

    }

  return (
        <div>
            <Navbar/>
         
                <div style={{marginTop:"120px"}}>
                  <hr></hr>
                  <h1 style={{ textAlign: "center" }}>CART DETAILS:</h1>
                  <div style={{textAlign:"center"}}>
                   <Link to='/Checkout'><Button variant='contained' size='large' to='/Checkout'>Checkout</Button></Link> &emsp;

                    <Button variant='contained' size='large' onClick={empty_cart}>Empty Cart</Button>
                    <h1>TOTAL BALANCE: <span style={{color:"green"}}>$250.00</span> </h1>
                  </div>
                  
                  <hr></hr>
                </div>
              
                <div className="cart-container-div">
                    {user.arr.map((val) => {
                      
                    return (
                        <>
                          <div className="cart-container">
                            <div className="sub-cart">
                              <div>
                                <img src={val.Img} alt="" width="250px" height="300px" />
                            </div>
          
                                <div id="lid">
                                  <h2 className="pid">{`Price:  ${val.Price} ₹` }</h2>
                                  <h2 className="pid">{`Rating:  ${val.Rating}`}</h2>
                                  {/* <button id="incr" onClick={increament}>
                                    +
                                  </button> */}
                                  <h2>{`Quantity:  ${val.quant}`}</h2>
                                  {/* <button id="decr" onClick={decreament}>
                                    -
                                  </button> */}
                                  <button className='bt-counter' id={val.Id} onClick={increament} >+</button>
                                  <button className='bt-counter' id={val.Id} onClick={decreament} >-</button>
                                  <br></br>
                                  <button id='del' onClick={Deletes}><DeleteIcon/></button> 
                                </div>
                              </div>
                            </div>
                          </>
                        );
                        
                    })}
                    
                </div>

          </div>

)
}
export default Cart