import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

// Local components
import { Color, normalize } from './../../../global'

/**
 * Label Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class Label extends React.Component {
  render(){
    return(<View style={{ alignItems: 'center'}}>
      <View style={[{
        backgroundColor: Color.color7,
        paddingHorizontal: 15,
        borderRadius: 50,
        paddingVertical: 5
      }, styles.shadow ]}>
        <Text style={{ fontSize: normalize(12), fontWeight: 'bold', color : '#F8FAFB' }}>{ this.props.text }</Text>
      </View>
    </View>)
  }
}

Label.defaultProps = {
  text:''
}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  },
  shadow : Platform.os === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  } : {
    elevation: 5
  },
})
export default Label