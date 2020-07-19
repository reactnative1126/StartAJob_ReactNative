import React, { Component } from 'react'
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native'

class CutomButton extends Component {
  render(){
    return(
    <TouchableOpacity 
      onPress={this.props.onPress}
      style={[{
        backgroundColor: this.props.backgroundColor || 'white',
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
      }, Platform.OS === 'ios'?{ 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
      }:{ elevation: 3 },
        this.props.style]}>
      <View style={{ flexDirection: 'row', paddingVertical: 0 }}>
      {this.props.logo && <View><Image source={this.props.logo} style={{ height: 26, width: 22 }}/></View>}
        <View style={{ paddingHorizontal: 10, justifyContent: 'center' }}><Text style={{color: this.props.fontColor || 'white', fontWeight: this.props.fontWeight || 'bold', fontSize: this.props.fontSize || 17 }}>{this.props.title}</Text></View>
      </View>
    </TouchableOpacity>)
  }
}

CutomButton.defaultProps = {
  title: 'No name'
}
export default CutomButton
































