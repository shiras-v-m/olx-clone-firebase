import React, { useEffect, useState } from 'react'
import { doc, setDoc,getDocs, collection } from "firebase/firestore"; 
import './Post.css'
import {db,firebaseAuth} from '../../firebase/config'
import { auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
function Post() {
    const [products,setProducts]=useState([])
    const auth = getAuth();
    const collection_name = "products"

    useEffect(()=>{ 
        findAll()
    },[])

  const signUp=()=>{
    createUserWithEmailAndPassword(auth, "shiras.astabits@gmail.com", "password")
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user created successfully");
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    })

   }

   const editProdutct =(id,data)=>{
    const cityRef = doc(db, collection_name, id);
    setDoc(cityRef, { ...data});
   }
    const findAll = async () => {
    const doc_refs = await getDocs(collection(db, collection_name))

    const res = []

    doc_refs.forEach((product) => {
        res.push({
            id: product.id, 
            ...product.data()
        })
    })

    // return res
    setProducts(res)
}

    
    return (
        <>
          
        <div className='container'>
        {products?.map((obj,key)=>(

<div className="post" key={key}>
<div className='likeContainer' onClick={()=>{
    let productsCopy=[]
    productsCopy=products
    productsCopy[key].like=!productsCopy[key].like
    console.log( productsCopy[key].like);
    editProdutct(productsCopy[key].id,productsCopy[key])
    setProducts([...productsCopy])
    console.log(productsCopy);
}}>
        <span  className={`material-symbols-outlined ${obj.like ? 'redHeart' : 'heart'}`}>favorite</span>
    </div>
    {obj.featured && <div className='featuredContainer'>
        <span className="material-symbols-outlined thunderIcon">bolt</span>
        <label  htmlFor="" className='featuredTxt'>featured</label>
    </div>}

    <img className='productImage' src={obj.image} alt="product image" />
    <div className='productDetails'>
        <div>
            <h2 className='productPrice'>₹ {obj.price}</h2>
            <h5 className='productName'>{obj.name}</h5>
            <div className="placeDateContainer">
                <h5 className='productPlace'>Chettuva</h5>
                <h6 className='productDate'>Aug 15</h6>
            </div>

        </div>
        <div className='line-style'></div>
    </div>
</div>
       
       ))}
            {/* <div className="post">
            <div className='likeContainer'>
                    <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className='featuredContainer'>
                    <span className="material-symbols-outlined thunderIcon">bolt</span>
                    <label htmlFor="" className='featuredTxt'>featured</label></div>

                <img className='productImage' src="https://apollo-singapore.akamaized.net/v1/files/z27456eohk5m1-IN/image;s=300x600;q=60" alt="product image" />
                <div className='productDetails'>
                    <div>
                        <h2 className='productPrice'>₹ 2,60,000</h2>
                        <h5 className='productName'>Mac M2 Pro</h5>
                        <div className="placeDateContainer">
                            <h5 className='productPlace'>Chettuva</h5>
                            <h6 className='productDate'>Aug 15</h6>
                        </div>

                    </div>
                    <div className='line-style'></div>
                </div>
            </div>

            <div className="post">
                <div className='likeContainer'>
                    <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className='featuredContainer'>
                    <span className="material-symbols-outlined thunderIcon">bolt</span>
                    <label htmlFor="" className='featuredTxt'>featured</label></div>

                <img className='productImage' src="https://apollo-singapore.akamaized.net/v1/files/z27456eohk5m1-IN/image;s=300x600;q=60" alt="product image" />
                <div className='productDetails'>
                    <div>
                        <h2 className='productPrice'>₹ 2,60,000</h2>
                        <h5 className='productName'>Mac M2 Pro</h5>
                        <div className="placeDateContainer">
                            <h5 className='productPlace'>Chettuva</h5>
                            <h6 className='productDate'>Aug 15</h6>
                        </div>

                    </div>
                    <div className='line-style'></div>
                </div>
            </div>

            <div className="post">
                <div className='likeContainer'>
                    <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className='featuredContainer'>
                    <span className="material-symbols-outlined thunderIcon">bolt</span>
                    <label htmlFor="" className='featuredTxt'>featured</label></div>

                <img className='productImage' src="https://apollo-singapore.akamaized.net/v1/files/z27456eohk5m1-IN/image;s=300x600;q=60" alt="product image" />
                <div className='productDetails'>
                    <div>
                        <h2 className='productPrice'>₹ 2,60,000</h2>
                        <h5 className='productName'>Mac M2 Pro</h5>
                        <div className="placeDateContainer">
                            <h5 className='productPlace'>Chettuva</h5>
                            <h6 className='productDate'>Aug 15</h6>
                        </div>

                    </div>
                    <div className='line-style'></div>
                </div>
            </div> */}


        </div>
        
            
        </>
    )
}

export default Post