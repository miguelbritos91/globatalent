import React from 'react';
import './Header.css';
import imgage01 from './01.jpg';
import imgage02 from './02.jpg';
import imgage03 from './03.jpg';
import imgage04 from './04.jpg';
import imgage05 from './05.jpg';

function Header(){
    return(
        <div className="header">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ imgage01 } className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ imgage02 } className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ imgage03 } className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ imgage04 } className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ imgage05 } className="d-block w-100" alt="..."/>
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
            <div className="container-fluid title-header">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h1 className="text-white text-center title">Apoya a deportistas y clubes a cumplir su sueño</h1>
                        <h2 className="text-white text-center pt-3 subtitle">Tu ayuda cambia vidas</h2>
                        <div className="text-center pt-1">
                            <a className="btn btn-lg btn-outline-success more-info text-white" href="#more-info">Contribuye ahora</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;