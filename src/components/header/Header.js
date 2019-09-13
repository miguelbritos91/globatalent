import React from 'react';
import './Header.css';
import imgage01 from './davidvega.png';
import imgage02 from './daniclos.png';
import imgage03 from './miquelpons.png';
import imgage04 from './asiaesport.png';
import bgHeader from '../bg-header.png';


function Header(){
    return(
        <div className="header">
            <img src={bgHeader} className="d-block h-100"/>
            <div className="container-fluid title-header">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h1 className="text-white text-center title">Apoya a deportistas y clubes a cumplir su sueño</h1>
                        <h2 className="text-white text-center pt-3 subtitle">Tu ayuda cambia vidas</h2>
                        <div className="text-center pt-1">
                            <a className="btn btn-lg btn-outline-warning more-info " href="#registers">Contribuye ahora</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-lg-6 col-xl-4 mx-auto mt-3">
                        <div className="deportistas p-2">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-auto mx-auto">
                                                <img src={ imgage01 } className="d-block h-100" alt="..."/>
                                            </div>
                                            <div className="col-auto mx-auto">
                                                <p className="text-white"><span className="font-weight-bold">Nombre:</span> David Vega</p>
                                                <p className="text-white"><span className="font-weight-bold">Símbolo:</span> DVT</p>
                                                <p className="text-white"><span className="font-weight-bold">Deporte:</span> Tenis</p>
                                                <p className="text-white"><span className="font-weight-bold">Precio:</span> 20 USD</p>
                                                <p className="text-white"><span className="font-weight-bold">Beneficios:</span> 18% Premios ATP</p>
                                            </div>                                        
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-auto mx-auto">
                                                <img src={ imgage02 } className="d-block h-100" alt="..."/>
                                            </div>
                                            <div className="col-auto mx-auto">
                                                <p className="text-white"><span class="font-weight-bold">Nombre:</span> Dani Clos</p>
                                                <p className="text-white"><span class="font-weight-bold">Símbolo:</span> DCT</p>
                                                <p className="text-white"><span class="font-weight-bold">Deporte:</span> Automovilismo</p>
                                                <p className="text-white"><span class="font-weight-bold">Precio:</span> 10 USD</p>
                                                <p className="text-white"><span class="font-weight-bold">Beneficios:</span> 10% de los premios</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-auto mx-auto">
                                                <img src={ imgage03 } className="d-block h-100" alt="..."/>
                                            </div>
                                            <div className="col-auto mx-auto">
                                                <p className="text-white"><span className="font-weight-bold">Nombre:</span> Miquel Pons</p>
                                                <p className="text-white"><span className="font-weight-bold">Símbolo:</span> PON</p>
                                                <p className="text-white"><span className="font-weight-bold">Deporte:</span> Motociclismo</p>
                                                <p className="text-white"><span className="font-weight-bold">Precio:</span> 20 USD</p>
                                                <p className="text-white"><span className="font-weight-bold">Beneficios:</span> 10% de los premios</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-auto mx-auto">
                                                <img src={ imgage04 } className="d-block h-100" alt="..."/>
                                            </div>
                                            <div className="col-auto mx-auto">
                                                <p className="text-white"><span className="font-weight-bold">Nombre:</span> Asia eSports</p>
                                                <p className="text-white"><span className="font-weight-bold">Símbolo:</span> GTE</p>
                                                <p className="text-white"><span className="font-weight-bold">Deporte:</span> eSports</p>
                                                <p className="text-white"><span className="font-weight-bold">Precio:</span> 5 USD</p>
                                                <p className="text-white"><span className="font-weight-bold">Beneficios:</span> 10% de los premios</p>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;


{/*  */}