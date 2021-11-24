import React from "react";
import LoginImg from '../assets/logo-login.png'

import './login.css'
export default () => {

    return (
        <div className="main-container">
            <div className='photo-description'>
                <img src={LoginImg} alt="" />
            </div>

            
            <div className="div-buttons">
                    <p className='login-title'>Login</p>
                    <input type="email" placeholder='E-mail' />
                    <input type="password" placeholder='Senha' />
                    <button><p>Entrar</p></button>
            </div>
            
        </div>
    )
}