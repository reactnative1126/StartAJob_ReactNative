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
class Search extends Component {
  render(){
    return(
    <View 
      style={[{
        backgroundColor: this.props.backgroundColor || 'white',
        paddingVertical: Platform.OS === "ios"? 12 :8,
        paddingHorizontal: 0,
        borderRadius: 4,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center"
      }, this.props.style ]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ paddingHorizontal: 15, justifyContent:'center' }}><Image source={SearchIcon} style={{ height: 18, width: 18 }}/></View>
        <View style={{ paddingHorizontal: 5, flex: 1 }}><TextInput 
          placeholder={ this.props.placeholder || "Search..." }
          placeholderTextColor={ Color.color6 }
          style={{
            flex: 1
          }}/></View>
        { this.props.SearchIconrightButton && <View style={{ paddingHorizontal: 2 }}>
          <TouchableOpacity 
            onPress={this.props.onPress}
            style={[{
              backgroundColor: this.props.backgroundColor || '#151515',
              paddingVertical: 10,
              paddingHorizontal: 25,
              borderRadius: 4,
              alignItems: "center"
            }, Platform.OS === 'ios'?{ }:{ elevation: 5 }, this.props.rightButtonStyle ]}>
            <View style={{ flexDirection: 'row' }}>
              <View><Image source={rightButtonIcon}/></View>
            </View>
          </TouchableOpacity>
        </View> }
      </View>
    </View>)
  }
}

Search.defaultProps = {
  title: 'No name',
  placeholder: '',
  rightButton: null,
  rightButtonIcon: null,
  rightButtonStyle: null
}
export default Search