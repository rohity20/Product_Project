import React from 'react'
import './AddProduct.css'
import axios from 'axios';

import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState("");
  const [rating, setRating] = useState("");
  const [company, setCompany] = useState("");

  const [item, setItem] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post('http://localhost:4000/api/v1/product/new', {
        "name": name,
        "price": price,
        "featured": featured,
        "rating": rating,
        "company": company
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (

    <div className='wrapper'
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        flexDirection: "column",
      }}>
      <h1>Add Product</h1>
     
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleSubmit}>
            <label>Product Name</label>
            <input type="text" className='form-control' required
              onChange={(e) => setName(e.target.value)} value={name}></input>
            <br></br>

            <label>Price</label>
            <input type="text" className='form-control' required
              onChange={(e) => setPrice(e.target.value)} value={price}></input>
            <br></br>

            <label>Featured</label>
            <input type="text" className='form-control' required
              onChange={(e) => setFeatured(e.target.value)} value={featured}></input>
            <br></br>
            <label>Rating</label>
            <input type="text" className='form-control' required
              onChange={(e) => setRating(e.target.value)} value={rating}></input>
            <br></br>
            <label>Company</label>
            <input type="text" className='form-control' required
              onChange={(e) => setCompany(e.target.value)} value={company}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              CREATE
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}


export default AddProduct