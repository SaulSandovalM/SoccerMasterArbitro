import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './src/components/login/Login';
import LoginPlayer from './src/components/login/LoginPlayer';
import Partido from './src/components/partidos/Partido';
import Partidos from './src/components/partidos/Partidos';
import Players from './src/components/players/Players';
import Player from './src/components/players/Player';
import Copas from './src/components/glasses/Copas';
import PartidosRey from './src/components/matches/PartidosRey/PartidosRey';
import PartidosAfricana from './src/components/matches/PartidosAfricana/PartidosAfricana';
import PartidosAmerica from './src/components/matches/PartidosAmerica/PartidosAmerica';
import PartidosArgentina from './src/components/matches/PartidosArgentina/PartidosArgentina';
import PartidosConfederaciones from './src/components/matches/PartidosConfederaciones/PartidosConfederaciones';
import PartidosFemenil from './src/components/matches/PartidosFemenil/PartidosFemenil';
import PartidosLibertadores from './src/components/matches/PartidosLibertadores/PartidosLibertadores';
import PartidosOro from './src/components/matches/PartidosOro/PartidosOro';
import PartidosSudamericana from './src/components/matches/PartidosSudamericana/PartidosSudamericana';

const Routes = createStackNavigator({
  Partido: Partido,
  Login: Login,
  LoginPlayer: LoginPlayer,
  Copas: Copas,
  PartidosAmerica: PartidosAmerica,
  PartidosOro: PartidosOro,
  PartidosLibertadores: PartidosLibertadores,
  PartidosAfricana: PartidosAfricana,
  PartidosArgentina: PartidosArgentina,
  PartidosConfederaciones: PartidosConfederaciones,
  PartidosSudamericana: PartidosSudamericana,
  PartidosFemenil: PartidosFemenil,
  PartidosRey: PartidosRey,
  Partidos: Partidos,
  Players: Players,
  Player: Player,
}, {
  initialRoute: 'Partido',
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
