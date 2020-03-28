import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

import './styles.css';
import herosImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import { useState } from 'react';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente mais tarde.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon </h1>
                    <input
                        placeholder='Sua ID'
                        value={id}
                        onChange={event => setId(event.target.value)} />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>


            <img src={herosImage} alt="Heroes" />
        </div>
    )
}