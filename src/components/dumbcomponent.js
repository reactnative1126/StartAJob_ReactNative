import React from 'react'
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

// Local components
import { Color } from './../../global'

/**
 * Card Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class Card extends React.Component {
  render(){
    return(<View>
      <Text>Jobs</Text>
    </View>)
  }
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  }
})
export default Card