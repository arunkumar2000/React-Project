
import React, { useState, useEffect } from 'react';
import NavComp from '../layout/NavComp';
import './external.css';
import img1 from '../images/img1.webp';
import img2 from '../images/img2.webp';
import img3 from '../images/img3.webp';
import img4 from '../images/img4.webp';
import img5 from '../images/img5.webp';
import img6 from '../images/img6.webp';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ProductsComp = () => {

    let footer = {
        backgroundColor:'#D1E9F6'
    };

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = () =>{
        axios.get("http://localhost:8888/products").then((response)=>{
            console.log(response.data);
            setProduct(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }


    const deleteProduct = (id)=>{
        console.log(id);
        if(window.confirm(`Are you sure to delete the product with ${id}`)==true){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("Product Deleted Successfully");
                fetchData();
            }).catch((error)=>{
                console.log(error);
            });
            
        }
    }

    return (
        <div style={{backgroundColor:'#D1E9F6'}}>
            <NavComp></NavComp>

            <main>
                <h3 className='display-3' style={{ color: '#F72C5B', fontSize: '40px', marginBottom: '20px', marginLeft:'25px'}}>Jewellery</h3>
                <div className='row mb-3 mx-3'>
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={img1} alt='Gold Earrings' style={{width:'150px',height:'150px'}}></img>
                            </div>
                            <div className='card-footer'>
                                <p>Modish 22 Karat Yellow Gold Floral Drop Earrings</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={img2} alt='Gold Ring' style={{width:'150px',height:'150px'}}></img>
                            </div>
                            <div className='card-footer'>
                                <p>Elegant Symmetric Gold Ring</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                        <div className='card'>
                                <div className='card-body'>
                                    <img src={img3} alt='Diamond Stud Earrings' style={{width:'150px',height:'150px'}}></img>
                                </div>
                                <div className='card-footer'>
                                    <p>Starry Dual Tone Diamond Stud Earrings</p>
                                </div>
                        </div>
                    </div>
                </div>
                
                    
                <div className='row mb-3 mx-3'>
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                        <div className='card'>
                                <div className='card-body'>
                                    <img src={img4} alt='Gold and Diamond Ring For Men' style={{width:'150px',height:'150px'}}></img>
                                </div>
                                <div className='card-footer'>
                                    <p>Fancy Traditional Gold and Diamond Finger Ring for Men</p>
                                </div>
                        </div>
                    </div>
                    

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={img5} alt='Bracelet' style={{width:'150px',height:'150px'}}></img>
                            </div>
                            <div className='card-footer'>
                                <p>Beautiful Linked Bracelet</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={img6} alt='Necklace' style={{width:'150px',height:'150px'}}></img>
                            </div>
                            <div className='card-footer'>
                                <p>Sparkling Hearts Diamond Necklace</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className='display-3' style={{ color: '#F72C5B', fontSize: '40px', marginBottom: '20px', marginLeft:'25px'}}>Products Info</h3>
                <Link to={"/addcomp"} className='btn btn-primary btn-sm' style={{marginLeft:"152px",marginBottom:"10px"}}>
                    <AddIcon/>Add
                </Link>
                <table className='table table-bordered table-striped table-hover table-center' style={{width:"80%",margin:"auto"}}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                product.length > 0 &&
                                    product.map((val,index)=>{
                                        return <tr key={val.id}>
                                                    <td style={{textAlign:"center"}}>{index+1}</td>
                                                    <td style={{textAlign:"center"}}>{val.pname}</td>
                                                    <td style={{textAlign:"center"}}>{val.pprice}</td>
                                                    <td style={{textAlign:"center"}}>{val.pquantity}</td>
                                                    <td style={{textAlign:"center"}}>
                                                        <Link to={`/editcomp/${val.id}`} className='btn btn-outline-warning btn-sm me-2'>
                                                            <EditIcon/>
                                                        </Link>
                                                        <button className='btn btn-outline-warning btn-sm me-2' onClick={()=>deleteProduct(val.id)}>
                                                            <DeleteIcon/>
                                                        </button>
                                                    </td>
                                               </tr>
                                    })
                            }
                        
                    </tbody>
                </table>
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

export default ProductsComp
