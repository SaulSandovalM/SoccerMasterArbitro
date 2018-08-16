import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Container, Input, Label, Button} from 'native-base';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
      return (
        <Container style={styles.container}>
          <View style={styles.welcomeWrapper}>
            <Icon name="soccer-ball-o" style={styles.icon}/>
            <Text style={styles.welcomeText}>Bienvenido a {'\n'}Soccer Master</Text>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.push('LoginPlayer')}>
              <Text style={styles.buttonText}>Continua como Arbitro</Text>
            </TouchableHighlight>
            <View style={styles.options}>
              <Text style={styles.optionsText}>Nota</Text>
            </View>
            <View style={styles.termsContainer}>
              <Text style={styles.termsText}>Al hacer click en los botones acepta nuestros</Text>
              <TouchableHighlight style={styles.link}>
                <Text style={styles.termsText}> Terminos de Servicio </Text>
              </TouchableHighlight>
              <Text style={styles.termsText}>y</Text>
              <TouchableHighlight style={styles.link}>
                <Text style={styles.termsText}> Politicas de Privacidad</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black'
  },
  welcomeWrapper: {
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
    marginBottom: 40
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  icon: {
    fontSize: 50,
    color: 'white',
    marginTop: 40,
    marginBottom: 40
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: 'black'
  },
  buttonContainerFan: {
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 15,
  },
  buttonTextFan: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: 'white'
  },
  options: {
    marginTop: 15,
  },
  optionsText: {
    color: 'white',
    fontSize: 16
  },
  termsText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600'
  },
  termsContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  }
});
