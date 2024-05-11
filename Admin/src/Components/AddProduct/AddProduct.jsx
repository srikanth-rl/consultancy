import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    description: "",
    old_price: "",
  });
  const handleFileUpload = (event) =>{
    const selectedFile = event.target.files[0];
    if(selectedFile){
      const storageRef = firebase.storage().ref();
      const fileRef=storageRef.child(selectedFile.name);
      fileRef.put(selectedFile)
      .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then((downloadURL)=>{
          console.log(downloadURL);
          setImage(downloadURL)
        })
      })
    } else{
      console.log("No file Selected");
    }
  }
  const Add_Product = async () => {
    // Validate product details
    if (productDetails.name.trim() === "") {
      alert("Product name cannot be empty");
      return;
    }
    else if (productDetails.description.trim() === "") {
      alert("Product description cannot be empty");
      return;
    }
    else if (++productDetails.old_price < 10) {
      alert("Price should be greater than or equal to 10");
      return;
    }

    let responseData;
    let product = productDetails;
      product.image= image;
      await fetch(`https://consultancy-zefr.onrender.com/addproduct`, {
      // await fetch(`https://consultancy-1.onrender.com/addproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Product addition failed");
        });
    // }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>PRODUCT NAME</p>
        <input
          type="text"
          name='name'
          value={productDetails.name}
          onChange={changeHandler}
          placeholder='Type Here'
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>PRICE</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder='Type here'
          />
        </div>
        <div className="addproduct-itemfield">
          <p>DESCRIPTION</p>
          <input
            value={productDetails.description}
            onChange={changeHandler}
            type="text"
            name="description"
            placeholder='Type here'
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? image : upload_area}
            className='addproduct-thumnail-img'
            alt=""
          />
        </label>
        <input
          onChange={handleFileUpload}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={Add_Product} className='addproduct-btn'>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;