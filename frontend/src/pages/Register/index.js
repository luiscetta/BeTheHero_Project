import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import './styles.css'


export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The One" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <form>
                        <input placeholder="Nome da ONG" />
                        <input type="email" placeholder="E-mail" />
                        <input  placeholder="Whatsapp" />

                        <div className="input-group">
                            <input placeholder="Cidade"/>
                            <input placeholder="uf" style={{ width: 80 }}/>
                        </div>

                        <button className="button" type="submit">
                            Cadastrar
                        </button>

                        <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                    </form>
                </section>
            </div>
        </div>
    );
}