import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
  
  const [loading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <>
        Loading....
      </>
    )
  }
  

  const [listItems, setListItems] = useState([]);
  
  const [filter, setFilter] = useState(listItems);
  const [price, setPrice] = useState(listItems);
  const [rating, setRating] = useState(listItems);

  const featuredProduct = (cat) => {
    const updateList = listItems.filter((x)=>x.featured === cat);
    setFilter(updateList);
  }

  const priceProduct = (cat) => {
    const updateList = listItems.filter((x)=>x.price <= cat);
    setFilter(updateList);
  }

  const ratingProduct = (cat) => {
    const updateList = listItems.filter((x)=>x.rating >= cat);
    setFilter(updateList);
  }


   const deleteItem = async (id) => {
    try{
      const res = await axios.delete(`http://localhost:4000/api/v1/product/delete/${id}`)
      const newListItems = listItems.filter(item=> item._id !== id);
      setListItems(newListItems);
      console.log(res);
    }catch(err){
      console.log(err);
    }
  }


  const updateItem = async (e) => {
    e.preventDefault()
    try{
    
    }catch(err){
      console.log(err);
    }
  } 


  useEffect(()=>{
    const getItemsList = async () => {
      try{
        const res = await axios.get('http://localhost:4000/api/v1/products')
        setListItems(res.data.products);
        console.log(res.data)
      }catch(err){
        console.log(err);
      }
    }
   
      getItemsList();

  },[]);

  return (
    <div className='container'>

      <div className="container my-2 py-2"> 
        <div className="row">
          <div className="col-12 mb-2">
            <h1 className="display-6 fw-bolder
             text-center">All Products</h1>
            <hr />
          </div>
        </div>
        <div>
        <div className="buttons d-flex justify-content-center mb-2 pb-2">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(listItems)}>All Products</button>
          <button className="btn btn-outline-dark me-2"  onClick={()=>featuredProduct(true)}>Featured Products</button>
    
        </div>

        <div className="buttons d-flex justify-content-center mb-2 pb-2">
        <input type="text" placeholder='Enter Product Price...' onChange={e => {setPrice(e.target.value)} } value={price} />
        <button className="btn btn-outline-dark me-2" onClick={()=>priceProduct(price)}>Products ( price )</button>

        </div>

        <div className="buttons d-flex justify-content-center mb-2 pb-2">
        <input type="text" placeholder='Enter Product Rating...' onChange={e => {setRating(e.target.value)} } value={rating} />
        <button className="btn btn-outline-dark me-2" onClick={()=>ratingProduct(rating)}>Products ( rating )</button>

        </div>

        </div>
        <div className="row justify-content-center">

          {loading ? <Loading /> : 
          <div>
          {filter.map((item) => {
            return(
           <div className="col-md-3 mb-4">
             <div class="card h-100 text-center p-4 " key={item.id} >
               <div class="card-body">
                 <h5 class="card-title mb-0">Name: {item.name}</h5>
                 <p class="card-text lead fw-bold">
                   Price: ${item.price}
                 </p>
                 <p class="card-text lead fw-bold">
                   Featured: {item.featured? "true" : "false"} 
                 </p>
                 <p class="card-text lead fw-bold">
                   Rating: {item.rating}
                 </p>
                 <p class="card-text lead fw-bold">
                   Company: {item.company}
                 </p>
        
                   <button className="update-item" onClick={()=>{updateItem(item._id)}}>Update</button> 
                  <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Delete</button>
       

               </div>
             </div>
           </div>
           )
           })}

         </div>
          
          }

        </div>

      </div>

    </div>
  )
}

export default AllProducts
