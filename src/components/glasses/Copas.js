import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class Copas extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <View style={styles.container}>

          <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
          <Text style={styles.text1}>ELIGE TU COPA</Text>
          <Text style={styles.text2}>TOCA PARA EFECTUAR SELECCIÓN</Text>

          <ScrollView>

            <View style={styles.view}>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosRey')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20del%20rey.jpg'}}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAmerica')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20am%C3%A9rica.jpg'}}/>
              </TouchableHighlight>
            </View>
            <View style={styles.view}>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosOro')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20oro.jpg'}}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosLibertadores')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20libertadores.jpg'}}/>
              </TouchableHighlight>
            </View>
            <View style={styles.view}>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAfricana')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20africana.jpg'}}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosArgentina')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20argentina.jpg'}}/>
              </TouchableHighlight>
            </View>
            <View style={styles.view}>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosConfederaciones')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20confederaciones.jpg'}}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosSudamericana')} style={styles.touch}>
                  <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/copa%20sudamericana.jpg'}}/>
              </TouchableHighlight>
            </View>
            <View style={styles.view}>
              <TouchableHighlight onPress={() => this.props.navigation.push('PartidosFemenil')} style={styles.touch}>
                <Image style={styles.img} source={{uri: 'http://www.planeta7.com.mx/imagenes/femenil.jpg'}}/>
              </TouchableHighlight>
            </View>
            <View style={styles.margin}/>

          </ScrollView>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  text1: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  text2: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    height: 30
  },
  view: {
    flexDirection: 'row'
  },
  touch: {
    width: '48%',
    height: 160,
    margin: '1%'
  },
  img: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey'
  },
  margin: {
    marginTop: 220
  },
  logo: {
    width: 120,
    height: 40,
    alignSelf: 'center'
  }
});
