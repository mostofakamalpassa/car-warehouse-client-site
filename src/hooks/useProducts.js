import React, { useEffect, useState } from 'react';

const useProducts = () => {

    const[products, setProducts] = useState([]);
    const[updateData, setUpdateData] = useState({});

    useEffect(()=>{
       const data = async()=>{
        try{
            const url = await fetch('https://warm-mesa-46770.herokuapp.com/allProducts');
            const data = await url.json();
            setProducts(data);

        }catch(error){
            console.log('Error', error);
        }
       };
       data();
    },[updateData]);

    return [products, setProducts, updateData, setUpdateData];
};

export default useProducts;