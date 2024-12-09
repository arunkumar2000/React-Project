
import React from 'react';
import NavComp from '../layout/NavComp';
import ajayceotitan from '../images/ajay.jpg';
import { bottom } from '@popperjs/core';


const AboutComp = () => {

    let footer = {
        position:'fixed',
        bottom:'-15px',
        backgroundColor: '#F2F9FF',
        width:'100%'
    };

    return (
        <div style={{ backgroundColor: '#F2F9FF'}}>
            <NavComp/>

            <main>
                <h3  className="display-3" style={{color: '#F72C5B', fontSize: '40px', marginBottom: '20px', marginLeft:'20px'}}>About</h3>
                <div class="accordion" id="accordionExample" style={{ marginTop: '20px', padding: '0 20px' }}>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            History
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        By the end of the 1980s, Titan launched Tanishq, which focused largely on exports to European and American markets, in an attempt to increase its foreign exchange reserves. In the early 1990s, India's exchange crisis was resolved, and Titan Company shifted the focus of the brand to the Indian market. A pilot plant was set up in August 1992 and the production began in 1994, and Tanishq's first store opened in 1996. <a href='https://en.wikipedia.org/wiki/Tanishq' style={{textDecoration:"none" }}>Know More..</a>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Owner
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{display:'flex',flexWrap:'warp', justifyContent:'center'}}>
                            <img src={ajayceotitan} style={{width:'80px',height:'80px',borderRadius:'50%'}}></img>
                            <strong style={{marginLeft:'10px',marginTop:'20px'}}>Ajoy Chawla, CEO Jewellery Division, Titan Co. Ltd.</strong> 
                        </div>
                        </div>
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

export default AboutComp
