import React from 'react';

import './styles.css';
import herosImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="be the hero" />
                <form>
                    <h1>Faça seu logon </h1>
                    <input placeholder='Sua ID' />
                    <button type='submit'>Entrar</button>

                    <a href="/register"> Não tenho cadastro </a>
                </form>
            </section>


            <img src={herosImage} alt="Heroes" />
        </div>
    )
}