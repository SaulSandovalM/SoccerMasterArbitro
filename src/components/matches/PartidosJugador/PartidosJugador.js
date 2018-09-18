import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Container, Content} from 'native-base';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PartidosJugador extends Component {
  constructor(props){
    super(props)
    this.state = {
      nuevo: '',
      lista: []
    }
  }

  static navigationOptions = {
      header: null
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('CopaAmericana/Jornada1/Partidos');
    this.listenForItems(itemsRef);
  }

  listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          equipo1: child.val().equipo1,
          equipo2: child.val().equipo2,
          goles1: child.val().goles1,
          goles2: child.val().goles2,
          id: child.key
        });
      });
      this.setState({
        lista: lista
      });
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.menuContainer}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
            <Icon name="reply" color="white" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>
          <Content style={styles.container}>
            <View style={styles.container}>
              <Text style={styles.jordana}>JORNADA</Text>
              <Text style={styles.fecha}>FECHA</Text>
            </View>

            <View style={styles.container}>

              <ListComponent
                lista={this.state.lista}
                changeDone={this.changeDone}
              />

            </View>
          </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
  },
  fecha: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  jordana: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 20,
  },
});
