import React from 'react';

const Localizacao = props => {
    return (
        
            <div className='map_area' id='localizacao'>
                <h3>Encontre a Lar mais próxima</h3>
                <img alt='map' src={require('../imagens/map.jpg')} />
            </div>
        
    );
}

export default Localizacao