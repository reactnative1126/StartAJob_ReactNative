import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

// Local components
import { Color } from '../../../global'

/**
 * ChatAlert Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class ChatAlert extends React.Component {

  
  render(){
   return (<View style={[
        styles.container,
        styles.shadow,
        {
          backgroundColor: (() => {
            if( this.props.type === "warn" ) 
              return '#ECEACA'
            else if( this.props.type === "success" )
              return '#EBFFE8'
            else if( this.props.type === "error" )
              return '#ECC8CA'
          })()
        }
      ]}>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            paddingVertical: 7,
            paddingHorizontal: 10,
            flexDirection: 'row'
          }}
        >
          <View>
            { this.props.headerIcon }
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >{ this.props.title }</Text>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 5,
          marginBottom: 20,
          paddingTop: 4
        }}>
          { this.props.body }
        </View>
      </View>)
   
  }
}

ChatAlert.defaultProps = {
  // This will take OFFER_APPROVAL, OFFER_ACCEPTED, OFFER_REJECTED
  headerIcon: null,
  title: '',
  body: null,
  type: 'warn'
}

const styles = StyleSheet.create({
  container : {
    marginBottom: 5,
    borderRadius: 10,
   marginHorizontal: 10
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
  }
})
export default ChatAlert