import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = props => {
    return (
        <div className='menu'>
            <div className='logo'>
                <img alt='icone' src={require('../imagens/icone.png')} />
                <p>La Receita</p>
                <div className='nav_menu'>
                    <div id='menu_scrow'>
                        <ul>
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='aplicativo'>Aplicativo</Link></li>
                            <li><Link to='funcionalidades'>Funcionalidades</Link></li>
                            <li><Link to='mapContainer'>Localização</Link></li>
                            <li><Link to='login'>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cabecalho