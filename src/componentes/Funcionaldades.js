import React from 'react';


const Funcionalidades = props => {
    return (
        <div className='funcionalidades_area' id='funcionalidades' >
            <h3>Funcionalidades</h3>
            <div className='items_func'>
                <div className='item_area'>
                    <img alt='barcode' src={require('../imagens/barcode.png')} />
                    <h4>BarCode</h4>
                    <p>Leitor de codigo de barras para rapido acesso
                        as informações do produto.</p>
                </div>
                <div className='item_area'>
                    <img alt='lista_compras' src={require('../imagens/lista_compras.png')} />
                    <h4>Lista de Compras</h4>
                    <p>Area para anotações de produtos fornecendo também
                        uma pacote de listas personalizadas.</p>
                </div>
                <div className='item_area'>
                    <img alt='receitas' src={require('../imagens/receitas.png')} />
                    <h4>Receitas</h4>
                    <p>Conjunto das mais deliciosas receitas da linha de
                        produtos Lar.</p>
                </div>
            </div>
            <div className='items_func'>
                <div className='item_area'>
                    <img alt='churrascometro' src={require('../imagens/churrascometro.png')} />
                    <h4>Churrascomêtro</h4>
                    <p> Calculadora especial para planejar aquele churrasco
                        de fim de semana.</p>
                </div>
                <div className='item_area'>
                    <img alt='medida' src={require('../imagens/medida.png')} />
                    <h4>Medidor</h4>
                    <p> Possibilidade de alterar medidas de receitas se adequando
                        a sua necessidade.</p>
                </div>
                <div className='item_area'>
                    <img alt='personalizado' src={require('../imagens/personalizado.png')} />
                    <h4>Personalização</h4>
                    <p> Produtos e receitas exibidos de acordo com suas limitações
                        alimentares.</p>
                </div>
            </div>
        </div>
    );
}

export default Funcionalidades