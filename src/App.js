import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Aplicativo from './componentes/Aplicativo'
import Funcionalidades from './componentes/Funcionaldades'
import Localizacao from './componentes/Localizacao'
import Login from './componentes/Login'
import Rodape from './componentes/Rodape'
import MapContainer from './componentes/maps/mapContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/aplicativo' component={Aplicativo} />
          <Route path='/funcionalidades' component={Funcionalidades} />
          <Route path='/mapContainer' component={MapContainer} />
          <Route path='/login' component={Login} />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App