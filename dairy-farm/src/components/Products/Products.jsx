import React, {useContext,useEffect,useState} from 'react';
import Card from "../Card/Card";
import style from "./Products.module.css";
import { data } from "../../data.js";
export default function Products() {
  const [product,allproduct] = useState([]);
 
  fetch(`https://consultancy-zefr.onrender.com/allproducts`)
    .then((res)=>res.json())
    .then((data)=>{
      allproduct(data);
    });


  return (
    <div id={style.product_section}>
    <h1 className={style.section_title}>PRODUCTS</h1>
    <div className={style.product}>
      {data.map((value,index)=>{
        return <Card value={index} img={value.image} description={value.description} name={value.product_name} price={value.price}/>
      })}
    </div>

    {product.length>0 && <><h1 className={style.section_title}>NEW PRODUCTS</h1><div className={style.product}>
        {product.map((products) => {
          return <Card key={products.id} img={products.image} description={products.description} name={products.name} price={"₹"+products.old_price} />;
        })}
      </div></>}
    
    </div>
  );
}
