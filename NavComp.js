
import React from 'react';
import tanishq from '../images/Tanishq.png';
import './external.css';
import { Link } from 'react-router-dom';
import FooterComp from './FooterComp';

const NavComp = () => {
    return (
        <div>
            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='my-2' src={tanishq} alt='Tanishq Jewellery Logo' style={{ width: '20%', maxWidth: '150px', height: 'auto', borderRadius: '50%'}} />
                <h1 className='display-1' style={{ color: '#F72C5B', marginTop: '10px',marginLeft: '15px' }}>Tanishq Jewellery</h1>
            </div>

            <hr></hr>
            <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',marginTop:'20px'}}>
                <Link to='/home' className='btn btn-outline-primary me-4'>Home</Link>
                <Link to='/about' className='btn btn-outline-primary me-4'>About</Link>
                <Link to='/products' className='btn btn-outline-primary me-4'>Products</Link>
                <Link to='/contact' className='btn btn-outline-primary me-4'>Contact</Link>
            </nav>

            <hr></hr>

           
        </div>
    );
}

export default NavComp;

