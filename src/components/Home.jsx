import React from "react";
import HomeImg from '../assets/logo-home.png'

import './home.css'
export default () => {

    return (
        <div className="main-home-container">
            <div className='photo-home-description'>
                <img src={HomeImg} alt="" />
                <p>Ajudamos a unir histórias e propósitos em forma de caronas universitárias</p>
            </div>

            
            <div className="div-home-buttons">
                    <button className='login'><p>Login</p></button>
                    <button className='cadastro'><p>Cadastro</p></button>
            </div>
            
        </div>
    )
}