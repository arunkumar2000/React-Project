
import React, { useEffect, useState } from 'react';
import tanishq from "../images/Tanishq.png";
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const EditComp = () => {

    let footer = {
        width:'100%',
        position:"relative",
        bottom:'-50px'
    };

    const {id}=useParams();
    const nav=useNavigate();

    const [product,setProduct]=useState({
        id:"",
        pname:"",
        pprice:"",
        pquantity:""
    });

    useEffect(()=>{
    
        axios.get(`http://localhost:8888/products/${id}`).then((response)=>{
            console.log("Fetched Product:", response.data); // Debugging
            //console.log(response.data);
            setProduct(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    const inputChangeHandler = (event) =>{
        
        const {name,value}=event.target;

        setProduct({...product,[name]:value});
    }

    const editProduct = (event) => {
        event.preventDefault();


        //console.log(product);
        
        axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
            window.alert("Product Edited Successfully");
                nav(`/products`);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div  style={{backgroundColor:'#D1E9F6',margin:"0px",padding:"0px",overflowX:"hidden", minHeight:"100vh"}}>
            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='my-2' src={tanishq} alt='Tanishq Jewellery Logo' style={{ width: '20%', maxWidth: '150px', height: 'auto', borderRadius: '50%'}} />
                <h1 className='display-1' style={{ color: '#F72C5B', marginTop: '10px',marginLeft: '15px' }}>Tanishq Jewellery</h1>
            </div>

            <hr></hr>

            <main style={{}}>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <form onSubmit={editProduct}>
                            <label  className='form-label'>Enter Product Name:</label>
                            <input type='text' name='pname' onChange={inputChangeHandler} value={product.pname} className='form-control mb-2'></input>
                            <label  className='form-label'>Enter Product Price:</label>
                            <input type='text' name='pprice' onChange={inputChangeHandler}  value={product.pprice} className='form-control mb-2'></input>
                            <label  className='form-label'>Enter Product Quantity:</label>
                            <input type='text' name='pquantity' onChange={inputChangeHandler}  value={product.pquantity} className='form-control mb-2'></input>

                            <button type='submit' className='btn btn-outline-primary mt-3'>Edit Data</button>
                        </form>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <Link to={`/products`} className='btn btn-outline-primary mt-5' style={{marginLeft:'380px'}}>Back To Products</Link>
            </main>

            <footer style={footer}>
                <hr />
                <div className='container'>
                    <h2 style={{ float: 'right', color: '#FF748B' }}>
                        This App Developed By <strong>Sai Kutthalingam S</strong>
                    </h2>
                    <div style={{ clear: 'both' }}></div>
                </div>
                <hr />
            </footer>

            
        </div>
    )
}

export default EditComp
