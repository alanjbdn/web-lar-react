import React from 'react';

const Aplicativo = props => {
    return (
        <div className='sistema_area' id='aplicativo'>
            <div className='area_text_sistema'>
                <h3>Aplicativo de <span className='feliz'>Receitas</span></h3>
                <p>&nbsp;&nbsp;O aplicativo <span className='feliz'>La Receita</span> busca
                    renunir todas as informações pertinentes a linha
                    de produtos Lar de maneira rápida e simplificada.</p>
            </div>
            <div className='area_image_sistema'>
                <img alt='tablet' src={require('../imagens/tablet.png')} />
            </div>
        </div>
    );
}

export default Aplicativo