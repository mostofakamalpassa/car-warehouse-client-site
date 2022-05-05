import React, { useEffect, useState } from 'react';

const useProducts = () => {

    const[products, setProducts] = useState([]);

    useEffect(()=>{
       const data = async()=>{
        try{
            const url = await fetch('http://localhost:5000/allProducts');
            const data = await url.json();
            setProducts(data);

        }catch(error){
            console.log('Error', error);
        }
       };
       data();
    },[]);

    return [products, setProducts];
};

export default useProducts;