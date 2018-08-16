import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import {Container, Content, DatePicker, Picker, Button} from 'native-base';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Partidos extends Component {
  constructor(props){
    super(props);
    this.state = {
      nuevo: '',
      lista: [],
      chosenDate: new Date(),
      selected: "key1"
    }
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  static navigationOptions = {
      header: null
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('Arbitro/Partidos');
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
          <TouchableWithoutFeedback>
            <Icon name="bars" color="black" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>
          <Content style={styles.container}>
            <View>
              <View>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.jornada}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Jornada 1" value="key0" />
                  <Picker.Item label="Jornada 2" value="key1" />
                  <Picker.Item label="Jornada 3" value="key2" />
                  <Picker.Item label="Jornada 4" value="key3" />
                  <Picker.Item label="Jornada 5" value="key4" />
                </Picker>
              </View>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona la Fecha"
                textStyle={{ color: "white" }}
                placeHolderTextStyle={{ color: "white" }}
                onDateChange={this.setDate}
                style={styles.date}
              />
            </View>

            <View>

              <ListComponent
                lista={this.state.lista}
                changeDone={this.changeDone}
              />

              <Button onPress={() => this.props.navigation.push('Partido')}><Text>Partido</Text></Button>

            </View>
          </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
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
  date: {
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  jornada: {
    color: 'white',
    fontSize: 20,
  },
  jornadaConatiner: {
    alignSelf: 'center',
  }
});
