import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './src/components/login/Login';
import LoginPlayer from './src/components/login/LoginPlayer';
import Partido from './src/components/partidos/Partido';
import Partidos from './src/components/partidos/Partidos';
import Players from './src/components/players/Players';
import Player from './src/components/players/Player';

const Routes = createStackNavigator({
  Login: Login,
  LoginPlayer: LoginPlayer,
  Partidos: Partidos,
  Partido: Partido,
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
