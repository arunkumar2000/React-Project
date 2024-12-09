
import React, { useState } from 'react';
import NavComp from '../layout/NavComp';
import './external.css';

const ContactComp = () => {

    let footer = {
        position: 'relative',
        bottom: '0px',
        backgroundColor: '#E0F4FF'
    };

    const [user,setUser]=useState({
        uname:'',
        uemail:'',
        ucontact:'',
        uta:'',

    });

    const changeInput = (event) => {
        const {name,value} = event.target;

        setUser({...user,[name]:value});
    }

    const checkData = (event) => {
        event.preventDefault();

        if(user.uname.trim()===''){
            window.alert('Name is required');
            return false;
        }

        if(!user.uname.trim().match('^[a-zA-Z ]{5,25}$')){
            window.alert('Name should contain only characters with minimum:5 and maximum:25');
            return false;
        }

        if(user.uemail.trim()===''){
            window.alert('Email is required');
            return false;
        }

        if(!user.uemail.trim().match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{8,30}$")){
            window.alert('Enter valid email');
            return false;
        }

        if(user.ucontact.trim()===''){
            window.alert('Phone Number is required');
            return false;
        }

        if(!user.ucontact.trim().match('^[0-9]{9,11}$')){
            window.alert('Phone Number must contain only numbers with minimum:9 and maximum:11');
            return false;
        }


        window.alert(JSON.stringify(user));

        setUser ({
            uname:'',
            uemail:'',
            ucontact:'',
            uta:''
        })
        

    }

    return (
        <div style={{backgroundColor: '#E0F4FF',minHeight:'80vh'}}>
           <NavComp/>

           <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'></div>  
                        <div className='col-6'>

                            <form onSubmit={checkData}>
                                <label className='form-label' for='uname'>Enter Your Name:</label>
                                <input className='form-control' type='text' name='uname' id='uname' value={user.uname} onChange={changeInput}></input>
                                <label className='form-label mt-2' for='uemail'>Enter Your Email:</label>
                                <input className='form-control' type='email' name='uemail' id='uemail' value={user.uemail} onChange={changeInput}></input>
                                <label className='form-label mt-2' for='ucontact'>Enter Your Phone Number:</label>
                                <input className='form-control' type='tel' name='ucontact' id='ucontact' value={user.ucontact} onChange={changeInput}></input>
                                <label className='form-label mt-2' for='uta'>Give Your Feedback:</label> <br></br>
                                <textarea className="form-control mb-2" name='uta' rows="4" value={user.uta} onChange={changeInput}></textarea>
                                <button className='btn btn-outline-primary mt-2'>Submit</button>


                            </form>

                        </div>  
                        <div className='col-3'></div>  
                    </div>

                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-6'>
                            <iframe className='mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124479.68760733806!2d80.15072865421932!3d12.843906854104834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d509ae2c201%3A0x9bdf1b7aa7395eb3!2sTanishq%20Jewellery%20-%20Chennai%20-%20East%20Coast%20Road!5e0!3m2!1sen!2sin!4v1733555898974!5m2!1sen!2sin" style={{width:"600", height:"450", border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
                        </div>
                        <div className='col-3'></div>

                    </div>
                </div>
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

export default ContactComp
