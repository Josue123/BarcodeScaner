import React,{Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  InteractionManager,
  Animated,
  Easing,
  Platform,
  Image,
  ScrollView
  } from 'react-native';

import Style from '../styles/codeReader';
import Camera from 'react-native-camera';

class CodeReader extends Component {
  constructor(props){
    super(props);
    this.camera = null;
    this.state = {
      code: "None",
      show:true,
      anim: new Animated.Value(0),
      camera: {
        aspect: Camera.constants.Aspect.fill,
      },
      line_position: new Animated.Value(0),
    };
    this._show = this._show.bind(this);
  }

  lineAnimated = () => {
    this.state.line_position.setValue(0);

    Animated.timing(this.state.line_position, {
        toValue: 200,
        duration: 3500,
        easing: Easing.linear,
    }).start(() => {
        this.lineAnimated();
    });
  };

  componentDidMount(){
    setTimeout(() => {
           this.lineAnimated();
    }, 2000);
  }


  componentWillUnmount(){
  }

  render(){

    return(
      <View style={Style.container}>
       <View style={[Style.header]}>
        <Text style={Style.sectionTitle1}>ESCANEAR CÓDIGO</Text>
       </View>

         <View style={[Style.content]}>
            <Camera
              ref={(cam) => { this.camera = cam } }
              style={Style.preview}
              aspect={this.state.camera.aspect}
              barCodeTypes = {['qr']}
              onBarCodeRead={ (code) => this._show(code)}
            >

            <View style={Style.modal}>
                <View style={Style.shade}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={Style.shade}></View>
                    <View style={Style.qrcode}>

                    </View>
                    <View style={Style.shade}></View>
                </View>

                <View style={[Style.shade, Style.contente]}>
                    <Text style={Style.text}>{this.state.code}</Text>
                </View>
            </View>
          </Camera>
        </View>


				<TouchableOpacity style={[Style.footer]} onPress={this.takePicture.bind(this)}>
					<View>
						<Text style={Style.buttonText}>Capturar</Text>
					</View>
				</TouchableOpacity>
     </View>
    );
  }

  _show(val) {
    this.setState({
        code:val.data
    })
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

export default CodeReader;
