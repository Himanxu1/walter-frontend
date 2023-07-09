import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../utils/cartSlice'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItem = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch()

  console.log(cartItem)

  const handleRemove  = (id)=>{
    
    toast('🦄 removed from cart!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    dispatch(removeFromCart(id))
  }
  const total = cartItem.reduce((acc,curr)=>{
    return acc+Number(curr.price)*curr.quantity
  },0)
  return  (
    <div className='bg-black w-full h-auto pb-[100px]' >
         <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <h1 className='text-center text-[100px] font-bold text-white'>/Cart</h1>
     
     {
        cartItem.length === 0 ? <div className='font-mono text-3xl text-center text-white '>Your Cart is empty👀</div>:
        <> 
        <div className=' m-auto pt-20 '>
     {
      cartItem.map((cartItem)=>{
        return (
          <div className='shadow-md shadow-red-300  h-[200px]  w-[800px] flex  mx-40 mt-10'>
            <img  src={cartItem.img} alt='cartitem' className='w-[200px] h-[200px]' />
            <div className='text-white  ml-[400px]'>
               <p className='font-mono text-3xl mt-2'>{cartItem.name}x {cartItem.quantity}</p>
               <p className='font-mono text-2xl mt-4'>${cartItem.price*cartItem.quantity}</p>
               <button className='px-8 py-2 border border-white text-white mt-10' onClick={()=>handleRemove(cartItem.id)}> Remove</button>
            </div>
          </div>
        )
      })
     }
    </div>
    {
       cartItem.length > 0 ? (
        <div className='mt-10 w-[1000px]'>
        <hr className='ml-20 '/>
        <div className='flex items-center  justify-end'>
          <h1 className='text-3xl text-white font-mono font-bold text-right mt-4'>Total: ${total}</h1>
          <button className='py-2 px-2 text-white border border-white ml-4 mt-4 hover:bg-white hover:text-black'>Proceed to Checkout</button>
        </div>
      </div>
       ) :(null)
    }
        </>
  
     }
      
     
    </div>
  )
}

export default Cart