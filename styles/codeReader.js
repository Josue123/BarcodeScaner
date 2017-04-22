import React, {
	StyleSheet,
	Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex:.5,
    paddingVertical: 30,
    backgroundColor: '#03A9F4',
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
		alignItems: 'center',
		paddingTop:20,
    zIndex: 10
  },
  sectionTitle1:{
		color: 'white',
		fontSize: 17,
		fontFamily: 'Roboto-Regular',
    alignSelf:'center'
	},
  content: {
    flex: 10,
    flexDirection: 'row',
  },
  footer: {
    flex:.5,
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00c4fa',
		alignItems: 'center'
  },

    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    shade: {
        flex: 1,
        backgroundColor: 'rgba(1, 1, 1, 0.65)',
    },
    contente: {
        alignItems: 'center',
        padding: 20,
    },
    qrcode: {
      width: 200,
      height: 200,
      alignItems: 'center',
			borderWidth: 2,
	 		borderColor: '#00FF00',
	 		backgroundColor: 'transparent',
    },
    text: {
        color: '#ccc',
        fontSize: 15,
    },
    line: {
        width: 200,
        height: 1,
        backgroundColor: 'rgba(30, 255, 145, 1)',
},
  buttonText:{
		color:'white',
		fontSize: 17,
		alignSelf: 'center',
		paddingTop: 10
 	},

});

export default style;
