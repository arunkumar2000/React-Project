
import React from 'react';
import NavComp from '../layout/NavComp';
import './external.css';
import { bottom } from '@popperjs/core';

const HomeComp = () => {

    let footer = {
        paddingTop: '20px',
        paddingBottom: '0px',
        width:'100%',
        position:'fixed',
        bottom:'-20px'
    };

    return (
        <div style={{backgroundColor: '#FFF8E8',minHeight:'100vh'}}>
            
            <NavComp />

            <main style={{ paddingBottom: '20px' }}>
                <h3 className="display-3" style={{ color: '#F72C5B', fontSize: '40px', marginBottom: '20px', marginLeft:'20px'}}>
                    Information About Tanishq
                </h3>
                <div style={{ marginTop: '20px', padding: '0 20px' }}>
                <div className="accordion" id="accordionExample">
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Timeless Appeal
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    At Tanishq, jewellery is not a product but a manifestation of artistry and
                                    our exquisite range of jewel pieces strike the perfect balance between
                                    traditional charm and contemporary appeal. With designs that capture the
                                    beauty and celebration of special occasions in the life of the Indian
                                    woman, Tanishq aims to be an integral part of her journey.
                                </div>
                            </div>
                        </div>

                    
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Epitomizing Excellence
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    At Tanishq, we strive to deliver excellence, consistently. We've brought
                                    to the market a whole new standard of business ethics and product
                                    reliability.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Success Secrets
                                </button>
                            </h2>
                            <div
                                id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our understanding of the ethos of the current Indian jewellery market and
                                    our constant evolution along with its changing demands and preferences is
                                    why Tanishq enjoys the distinct honour of being coveted by Indian women.
                                </div>
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
    );
};

export default HomeComp;
