import React from 'react'
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

// Local components
import Alert from './../../components/Alerts'
import NoJobIcon from './../../../assets/no-jobs-icon.png'

// Config
import { Color, normalize  } from './../../global'

/**
 * NoOpenJobAlert Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class NoOpenJobAlert extends React.Component {
  render(){
    return(<Alert
      title={'No open jobs found'}
      icon={NoJobIcon}
      body={
        <View style={{
          marginTop: 10
        }}>
          <View
            style={{
              paddingVertical: 10
            }}
          >
            <Text 
              style={{
                color: Color.color6,
                fontSize: normalize(14)
              }}
            >Check us out later - we have new jobs every day!</Text>
          </View>
          <View
            style={{
                paddingTop: 10
              }}
          >
            <Text 
              style={{
                color: Color.color4,
                fontSize: normalize(12)
              }}>
            
            <Text 
              style={{
                color: Color.color4,
                fontSize: normalize(12),
                fontWeight: 'bold'
              }}>Pro tips:</Text> Try refining your search keywords, adjusting your existing &nbsp;
            <Text 
              style={{
                color: Color.color7,
                fontSize: normalize(12),
                textDecorationLine: 'underline',
                
              }}>work areas</Text> or add new ones
            </Text>
          </View>
        </View>
      }
    />)
  }
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  }
})
export default NoOpenJobAlert