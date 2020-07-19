import React, { Component } from 'react'
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
  TextInput,
  Image
} from 'react-native'
import SearchIcon from './../../../assets/search.png'
import BarCode from './../../../assets/barcode.png' 

// Config
import { Color } from './../../global'
class Input extends Component {
  render(){
    return(
    <View 
      style={[{
        backgroundColor: this.props.backgroundColor || 'white',
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderRadius: 4,
        alignItems: "center"
      }, this.props.style ]}>
      <View style={{ flexDirection: 'row' }}>
        { this.props.icon && <View style={{ paddingHorizontal: 15, justifyContent:'center' }}>
          <Image source={ this.props.icon } style={{ height: 18, width: 18 }}/>
        </View>}
        <View 
          style={[
            { 
              paddingHorizontal: 5, 
              flex: 1 
            },
            this.props.inputStyle
          ]}>
          <TextInput 
            placeholder={ this.props.placeholder || '' }
            placeholderTextColor={ this.props.placeholderTextColor || 'gray' }
            onChangeText={ this.props.onChangeText }
            keyboardType={ this.props.keyboardType }
            value = { this.props.value }
            style={{
              flex: 1,
              fontSize: 18
            }}
          /></View>
        { this.props.rightButton && <View style={{ paddingHorizontal: 2 }}>
          <TouchableOpacity 
            onPress={this.props.onPressRightButton }
            style={[{
              backgroundColor: '#151515',
              paddingVertical: 10,
              paddingHorizontal: 25,
              borderRadius: 4,
              alignItems: "center"
            }, Platform.OS === 'ios'?{ }:{ elevation: 5 }, this.props.rightButtonStyle ]}>
            <View style={{ flexDirection: 'row' }}>
              { this.props.rightButtonIcon && <View>
                <Image 
                  style={{ 
                    width: 23,
                    height: 17
                  }}
                  source={ this.props.rightButtonIcon }/></View>}
            </View>
          </TouchableOpacity>
        </View> }
      </View>
    </View>)
  }
}

Input.defaultProps = {
  title: 'No name',
  icon: null,
  rightButton: null,
  rightButtonIcon: null,
  rightButtonStyle: null
}
export default Input