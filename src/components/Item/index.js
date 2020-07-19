import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'

// Local components

// Config
import { Color } from './../../global'

// Icon
import RightArrow from './../../../assets/right-arrow.png'

/**
 * Item Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class Item extends React.Component {

  componentDidMount(){
    if(Platform.OS === "android")
      TouchableNativeFeedback.Ripple()
  }
  
  render(){
    let content = (<View style={[ styles.container, this.props.style ]}>
      { this.props.icon && <View>
        { this.props.icon }
      </View>}
      <View style={{
        flex: 1,
        paddingHorizontal: 10
      }}>
        <Text style={{ fontSize: 20 }}>{ this.props.text }</Text>
      </View>
      { !this.props.rightComponent && <View>
        <Image 
          style={{
            height: 12,
            width: 7
          }}
          source={RightArrow}/>
      </View>}
      { this.props.rightComponent && <View>
        { this.props.rightComponent }
      </View>}
    </View>)
    
    return (<TouchableOpacity
      activeOpacity={0.6}
      onPress={ this.props.onPress }
    >
      { content }
    </TouchableOpacity>)
    
  }
}

Item.defaultProps = {
  text: '',
  icon: null,
  rightComponent: null
}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 1
  }
})
export default Item