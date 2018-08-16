import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Button, Input} from 'native-base';
import firebase from '../firebase/Firebase';

export default class Player extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      gol: "",
      amarilla: "",
      roja: "",
    };
  }

  push = () => {
  firebase.database().ref('CopaAmerica/Equipos/Equipo1/Jugadores/Jugador1').update({
    goles: "2"
  }).then(() => {
      this.props.navigation.push('Partidos')
  }).catch((error)=>{
      //error callback
      console.log('no funciona')
  });
}

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.push}><Text>Gol</Text></Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
