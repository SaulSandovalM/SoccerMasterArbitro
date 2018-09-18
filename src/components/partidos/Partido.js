import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import firebase from '../firebase/Firebase';
import {Stopwatch} from 'react-native-stopwatch-timer';

export default class Partido extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }

  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }

  getFormattedTime(time) {
      this.currentTime = time;
  };

  gol = () => {
  firebase.database().ref('CopaAmerica/Jornada1/Partidos/Partido1/').update({
    goles1: "4"
  }).then(() => {
      console.log('funciona')
  }).catch((error)=>{
      //error callback
      console.log('no funciona')
  });
}

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.viewContainer}>
            <Text style={styles.equipo}>PUMAS</Text>
            <Text style={styles.goles} onPress={() => this.props.navigation.push('Players')}>6</Text>
            <Image style={styles.img} source={{uri: 'https://es.onefootball.com/wp-content/uploads/sites/12/2017/06/Pumas-UNAM.png'}}/>
          </View>
          <View style={styles.viewContainer2}>
            <Text style={styles.equipo}>PACHUCA</Text>
            <Text style={styles.goles} onPress={this.gol}>2</Text>
            <Image style={styles.img} source={{uri: 'http://img.futbox.com/v1/a82/fd8/1d7/c3a/9a3fa261b77994d4acfc_zoom.png'}}/>
          </View>
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: -100
  },
  text: {
    fontSize: 30,
    color: 'black',
    marginLeft: 7,
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row',
  },
  viewContainer: {
    backgroundColor: '#c8a015',
    width: '50%',
    height: '100%',
    flex: 1
  },
  viewContainer2: {
    backgroundColor: '#243170',
    width: '50%',
    height: '100%',
    flex: 1
  },
  goles: {
    color: 'white',
    fontSize: 80,
    marginTop: 40,
    alignSelf: 'center'
  },
  equipo: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  touch: {
    backgroundColor: 'transparent',
    width: '50%',
    height: 50,
    alignItems: 'center'
  },
  textCrono: {
    fontSize: 30,
    color: 'black'
  },
  img: {
    width: '80%',
    height: '30%',
    marginTop: 20,
    alignSelf: 'center'
  }
});
