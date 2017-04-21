import React,{Component} from 'react';
import {View, StyleSheet, Platform, Text, TouchableOpacity, ListView, ToastAndroid, Vibration} from 'react-native';
//import Style from '../styles/codeReader';
import BarcodeScanner from 'react-native-barcode-scanner-universal'
//import Camera from 'react-native-camera';

class CodeReader extends Component {
  constructor(props){
    super(props);
    this.state = {
       code: "None"
    };
    this._show = this._show.bind(this);
  }


  componentDidMount(){

  }

  componentWillUnmount(){
  }


  render(){
    let scanArea = null;
      if (Platform.OS === 'ios') {
          scanArea = (
              <View style={styles.rectangleContainer}>
                  <View style={styles.rectangle} />
              </View>
          )
    }
    return(
      <View>
          <Text style={ [{color:"red"},{fontSize:16}] }>{this.state.code}</Text>
          <BarcodeScanner
              onBarCodeRead={ (code) => this._show(code)}
              style={styles.camera}>
              {scanArea}
          </BarcodeScanner>
      </View>
    );
  }

  _show(val) {
    this.setState({
        code:val.data
    })
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  camera: {
       flex: 1
   },
   rectangleContainer: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'transparent'
   },
   rectangle: {
       height: 250,
       width: 250,
       borderWidth: 2,
       borderColor: '#00FF00',
       backgroundColor: 'transparent'
   }
});

export default CodeReader;
