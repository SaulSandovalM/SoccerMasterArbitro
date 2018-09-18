import React from 'react';
import {View, Text, TextInput, StyleSheet, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Input, Fab} from 'native-base';
import {NavigationActions} from 'react-navigation';
import firebase from '../firebase/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginPlayer extends React.Component {
  static navigationOptions = {
      header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
          this.props.navigation.push('Copas')
      }, (error) => {
          Alert.alert('Ingresa un usuario y contraseña validos o no tengas coneccion a internet');
      });
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.login}>Inicia Sesión</Text>
            <Text style={styles.textInput}>CORREO ELECTRÓNICO</Text>
            <Input onChangeText={(text) => {this.setState({email: text})}}
              keyboardType="email-address"
              autoCapitalize="none"
              textColor="white"
              style={styles.text}/>
            <Text style={styles.textInput}>CONTRASEÑA</Text>
            <Input onChangeText={(text) => {this.setState({password: text})}}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.text}/>
          </ScrollView>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={styles.fab}
            position="bottomRight"
            onPress={this.onLoginPress}>
            <Icon name="chevron-right" style={{color: 'black'}}/>
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black'
  },
  scrollViewContainer: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  login: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 40,
    color: 'white'
  },
  textInput: {
    display: 'flex',
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10
  },
  text: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'white',
    borderBottomColor: 'white',
    marginBottom: 30
  },
  fab: {
    backgroundColor: 'white'
  },
});
