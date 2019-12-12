import React from 'react';

import background from '../imagens/background.jpg';

const Inicio = props => {
    return (
        <div className='inform_main' id='inform_main' style={{ backgroundImage: `url(${background})` }}>
            <div className='download_info'>
                <div className='text_animation'>
                    <div>
                        <h3>A gente ama ver você Feliz</h3>
                    </div>
                    <div className='text_transation'>
                        <h3><span className='feliz' id='log'></span></h3>
                    </div>
                </div>
                <div className='download_area'>
                    <img alt='google_play' src={require('../imagens/google_play.png')} />
                    <img alt='google_play' src={require('../imagens/apple_store.png')} />
                </div>
            </div>
        </div>
    );
}

export default Inicio