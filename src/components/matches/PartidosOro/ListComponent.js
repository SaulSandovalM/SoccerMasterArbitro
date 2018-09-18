import React, { Component } from 'react';
import RowComponent from './RowComponent';
import {View} from 'react-native';

export default class ListComponent extends Component {
  render() {
    return (
      <View>
        {this.props.lista.map(
          item =>
            <RowComponent
              key={item.id}
              item={item}
              changeDone={this.props.changeDone}
            />
        )}
      </View>
    );
  }
}
