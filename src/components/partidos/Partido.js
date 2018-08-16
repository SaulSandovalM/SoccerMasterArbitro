import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button} from 'native-base';
import firebase from '../firebase/Firebase';

export default class Partido extends Component {
  static navigationOptions = {
    header: null
  };

  gol = () => {
  firebase.database().ref('CopaAmerica/Jornada1/Partidos/Partido1/').update({
    goles1: "6"
  }).then(() => {
      console.log('funciona')
  }).catch((error)=>{
      //error callback
      console.log('no funciona')
  });
}

  render() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <ScrollView>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{backgroundColor: '#e31114', width: '50%'}}>
              <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}} onPress={() => this.props.navigation.push('Players')}>6</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>Puebla</Text>
            </View>
            <View style={{backgroundColor: '#008641', width: '50%'}}>
              <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}} onPress={this.gol}>2</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>PACHUCA</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
