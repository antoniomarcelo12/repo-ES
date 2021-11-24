import React from "react";
import SigninImg from '../assets/logo-signin.png'

import './signup.css'
export default () => {

    return (
        <div className="main-container">
            <div className='photo-description'>
                <img src={SigninImg} alt="" />
            </div>

            
            <div className="div-buttons">
                    <p className='signin-header'>Cadastro</p>
                    <input type="name" placeholder='Nome' />
                    <input type="email" placeholder='E-mail' />
                    <input type="text" placeholder='Faculdade' />
                    <input type="password" placeholder='Senha' />
                    <button><p>Cadastrar</p></button>
            </div>
            
        </div>
    )
}