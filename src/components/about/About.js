import React from 'react';
import './About.css';
import imggbt01 from './corpicon.28a140e6.png';
import imggbt02 from './toni.b71e62b0.png';

function About(){
    return(
        <div className="About plx">
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="title text-center title-about text-uppercase">¿QUÉ ES GLOBATALENT?</h3>
                        </div>
                        <div className="col-md-3 m-auto">
                            <img src={ imggbt01 } className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-about">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <p className="text-blue font-weight-bold text-justify">Globatalent es una nueva forma de inversión que te permitirá multiplicar tu inversión por 5 en el mundo del deporte.</p>
                            <p className="text-white text-justify">Clubes y deportistas crean sus tokens que se venden en el market Globatalent durante un periodo de 3-6 meses. <br /> Los clubes/deportistas se comprometen a devolver a los compradores de los token un importe anual que puede estar ligado a % de los premios del club/deportista, % de futuros traspasos, % de derechos de tv o cualquier otro derecho que tenga el club/deportista.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="title text-center title-about text-uppercase">¿ES SEGURA LA INVERSIÓN?</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="text-white text-justify">Nuestros deportistas y clubes pasan por un selectivo proceso de validación antes de entrar en nuestra plataforma, a través de este proceso nos aseguramos que el proyecto tiene rentabilidad para los compradores de los tokens. Un especialista del deporte en concreto validará el potencial futuro del deportista. Como ejemplo nuestro tenista David Vega ha sido avalado por Toni Nadal.</p>                            
                        </div>
                        <div className="col-md-4">
                            <img src={ imggbt02 } className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <iframe className="video" src="https://www.youtube.com/embed/3UH1RSPhnS0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;