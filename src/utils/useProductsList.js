import { useState,useEffect } from "react"

const useProductList = (setFilteredProducts) =>{
    const [products,setProducts] = useState([])
    const backend_url = process.env.REACT_APP_BACKEND_URI;

    const fetchProducts = async () =>{
      const data = await fetch(`${backend_url}/api/products/get-all`)
      const res = await data.json()
      // console.log(res.data)
      setProducts(res.data)
      setFilteredProducts(res.data)
    }
  
    useEffect(()=>{
      fetchProducts()
    },[])
    return products
}

export default useProductList