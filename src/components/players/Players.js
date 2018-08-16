import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, List, ListItem, Right, Left} from 'native-base';

export default class Players extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem noIndent onPress={() => this.props.navigation.push('Player')}>
              <Left>
                <Text style={{fontSize: 26}}> 1. SAUL</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>DEF</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Left>
                <Text style={{fontSize: 26}}>Simon Mignolet</Text>
              </Left>
              <Right>
                <Text style={{fontSize: 26}}>10</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
