import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

// Local components
import Input from './../../Input'

// Icons
import MoneyBag from './../../../../assets/money-bag.png'
import Tick from './../../../../assets/tick.png'
import BlueDoubleTick from './../../../../assets/blue-double-tick.png'
import DoubleTick from './../../../../assets/double-tick.png'

// Config
import { Color, normalize } from './../../../global'

/**
 * PriceAsk Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class PriceAsk extends React.Component {
  render(){
    return(<View
      style={[ 
        styles.messageContainer, 
        this.props.context === "outgoing" ? styles.outgoing : styles.incoming, 
        this.props.context === "incoming" ? { 
          borderWidth: 2,
          borderColor: '#51C35D'
        } :{},
        !this.props.tail ? { borderRadius: 10 }: {} ]}
      >
        <View
          style={{
            backgroundColor: '#fff',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold'
            }}
          >How much are you asking for the job?</Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              marginTop: 10,

            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={MoneyBag}
                style={{
                  width: 31,
                  height: 32,
                  marginRight: 5
                }}
              />
            </View>
            <View 
              style={{
                flex: 1
              }}
            >
              <Input 
                placeholder= "1,500"
                inputStyle={{
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: '#E3E3E3',
                  paddingVertical: 10,
                  paddingLeft: 10,
                  marginRight: 5
                }}
                value = { this.props.value }
                keyboardType="numeric"
                onChangeText = { this.props.onChangePrice }
                rightButton ={ true }
                rightButtonIcon = { Tick }
                rightButtonStyle = {{
                  backgroundColor: '#51C45D',
                  paddingVertical: 18
                }}
                onPressRightButton = { this.props.onPressDone }
              />
            </View>
          </View>
          <View >
            <View style={[ styles.chatboxFooterTimeStamp, { justifyContent: 'flex-end' } ]}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: "#A4A4A4", fontSize: normalize(12) }}>{ this.props.timestamp }</Text>
                {this.props.isRead === false || this.props.isRead === true ? <View style={{ justifyContent:'center', alignItems:'center'}}>
                  <Image 
                    source={ this.props.isRead ? BlueDoubleTick: DoubleTick } 
                    style={{ 
                      height: 8,
                      width: 13,
                      marginLeft: 5 
                      }} />
                </View> : null }
              </View>
            </View>
          </View>
        </View>          
      </View>)
  }
}

PriceAsk.defaultProps = {
  tail: true,
  onChangePrice: null,
  onPressDone: null,
  isRead: null,
  timestamp: ''

}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  },
  messageContainer: {
    padding: 5,
    marginVertical: 5,
    width: Dimensions.get('window').width-50,
  },
  outgoing: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#D5FFCE'
  },
  incoming: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white'
  },
  chatboxFooterTimeStamp : {
    fontSize: 12,
    flexDirection: 'row'
  }
})
export default PriceAsk


