import React from 'react'
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

// Local components
import Item from './../Item'
// Config
import { Color } from './../../global'

/**
 * ItemContainer Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class ItemContainer extends React.Component {
  render(){
    return(<View style={ styles.container }>
      { this.props.children }
    </View>)
  }
}

const styles = StyleSheet.create({
  container : {
    marginBottom: 20
  }
})
export default ItemContainer