import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Scaner from "./componentes/codeReader";

export default class BarcodeScaner extends Component {
  render() {
    return (
        <Scaner />
    );
  }
}

AppRegistry.registerComponent('BarcodeScaner', () => BarcodeScaner);
