import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button} from 'native-base';

export default class Partido extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{backgroundColor: 'black'}}>
                <ScrollView>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#e31114', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>6</Text>
                            <Text
                                style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>Puebla</Text>
                        </View>
                        <View style={{backgroundColor: '#008641', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>2</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                marginTop: 10,
                                alignSelf: 'center'
                            }}>PACHUCA</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#e31114', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>6</Text>
                            <Text
                                style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>Puebla</Text>
                        </View>
                        <View style={{backgroundColor: '#008641', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>2</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                marginTop: 10,
                                alignSelf: 'center'
                            }}>PACHUCA</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#e31114', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>6</Text>
                            <Text
                                style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>Puebla</Text>
                        </View>
                        <View style={{backgroundColor: '#008641', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>2</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                marginTop: 10,
                                alignSelf: 'center'
                            }}>PACHUCA</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#e31114', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>6</Text>
                            <Text
                                style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>Puebla</Text>
                        </View>
                        <View style={{backgroundColor: '#008641', width: '50%', height: 650}}>
                            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>2</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                marginTop: 10,
                                alignSelf: 'center'
                            }}>PACHUCA</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({});
