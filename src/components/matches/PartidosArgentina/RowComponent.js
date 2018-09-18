import React, {Component} from 'react';
import {TouchableHighlight, View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class RowComponent extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.push('Partido')}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          locations={[0.94, 0.95]}
          colors={['#e31114', '#008641']}
          style={styles.linearGradient}
        >
          <View style={styles.cardStyle}>
            <Image style={styles.img} source={{uri: 'http://www.pesstatsdatabase.com/PSD/PSD/Images/Clubs/Mexico/Puebla-FC.png'}}/>
            <Text style={styles.textTeam}> {this.props.item.equipo1} <Text style={styles.num}> {this.props.item.goles1} </Text></Text>
            <Text style={styles.textTeam}><Text style={styles.num}> {this.props.item.goles2} </Text> {this.props.item.equipo2}</Text>
            <Image style={styles.img} source={{uri: 'http://cruzazulfc.com.mx/wp-content/uploads/2016/06/pachuca-1-128x128.png'}}/>
          </View>
        </LinearGradient>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -10
  },
  cardStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    alignSelf: 'center'
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  textTeam: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  num: {
    fontSize: 26,
    color: 'white'
  }
});
