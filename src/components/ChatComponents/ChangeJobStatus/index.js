import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

// Local components
import { Color } from '../../../global'

// Icon
import HandShakeWhite from './../../../../assets/hand-shake-white.png'
import Tick from './../../../../assets/tick.png'

/**
 * Overlay Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class Overlay extends React.Component {
  render(){
    return(<View
      style={{
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 10
      }}
      >
      <TouchableOpacity 
        onPress={this.props.onPressMarkJobCompleted }
        style={[{
          paddingHorizontal: 25,
          borderRadius: 4,
          backgroundColor: '#51C35D',
          paddingVertical: 10,
          marginBottom: 10,
          alignItems: "center"
        }, styles.shadow ]}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{
            justifyContent: 'center',
            marginRight: 10
          }}>
            <Image 
              style={{
                width: 23,
                height: 17
              }}
              source={ Tick }/>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff'
              }}
            >Mark job completed</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={this.props.onPressChangeTerms }
        style={[{
          paddingHorizontal: 25,
          borderRadius: 4,
          backgroundColor: '#1590D6',
          paddingVertical: 10,
          alignItems: "center"
        }, styles.shadow ]}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{
            justifyContent: 'center',
            marginRight: 10
          }}>
            <Image 
              style={{
                width: 32,
                height: 20
              }}
              source={HandShakeWhite}/>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff'
              }}
            >Change terms</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>)
  }
}

Overlay.defaultProps = {
  onPressMarkJobCompleted: null,
  onPressChangeTerms: null
}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  }
})
export default Overlay