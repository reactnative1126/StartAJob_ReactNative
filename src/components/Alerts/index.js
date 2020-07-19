import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} from 'react-native'

// Local components
// Config
import { Color, normalize } from './../../global'

/**
 * Alert Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class Alert extends React.Component {
  render(){
    return(<View style={[ styles.container, styles.shadow ]}>
      <View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          { this.props.icon && <View
            style={{
              justifyContent: 'center',
              paddingHorizontal: 10
            }}
          >
            <Image 
            source={ this.props.icon } 
            style = {{
              height: 23,
              width: 23
            }}
            />
          </View>}
          
          <View style={{
            justifyContent: 'center'
          }}> 
            <Text
              style={{
                fontSize: normalize(24),
                fontWeight: 'bold',
                color: Color.color6
              }}
            >{ this.props.title }</Text>
          </View>
        </View>
      </View>
      <View>
        { this.props.body }
      </View>
    </View>)
  }
}

Alert.defaultProps = {
  icon: null,
  body : null,
  title: 'No open jobs found'
}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 2
  },
  shadow : Platform.os === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  } : {
    elevation: 2
  }
})
export default Alert