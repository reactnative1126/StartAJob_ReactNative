import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'

// Local components
import Input from './../../Input'

// Icons
import MoneyBag from './../../../../assets/money-bag.png'
import Tick from './../../../../assets/tick.png'
import ClockGreen from './../../../../assets/clock-green.png'
import BlueDoubleTick from './../../../../assets/blue-double-tick.png'
import DoubleTick from './../../../../assets/double-tick.png'

// Config
import { Color, normalize} from './../../../global'

/**
 * DaysAsk Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class DaysAsk extends React.Component {
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
            backgroundColor: '#fff'
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
                justifyContent: "center"
              }}
            >
              <Image
                source={ ClockGreen }
                style={{
                  width: 31,
                  height: 31,
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
                placeholder= "14"
                inputStyle={{
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: '#E3E3E3',
                  paddingVertical: 12,
                  paddingLeft: 10,
                  marginRight: 5
                }}
                value = { this.props.value }
                keyboardType="numeric"
                onChangeText = { this.props.onChangeDays }
               />
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginRight: 5
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: Color.color4
                }}
              >days</Text>
            </View>
            <View style={{ 
              paddingHorizontal: 2, 
              justifyContent: 'center' 
            }}>
              <TouchableOpacity 
                onPress={this.props.onPressDone }
                style={[{
                  paddingHorizontal: 25,
                  borderRadius: 4,
                  backgroundColor: '#51C45D',
                  paddingVertical: 18,
                  alignItems: "center"
                }, styles.shadow ]}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image 
                      style={{ 
                        width: 23,
                        height: 17
                      }}
                      source={ Tick }/></View>
                </View>
              </TouchableOpacity>
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

DaysAsk.defaultProps = {
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
  chatboxFooterTimeStamp : {
    fontSize: 12,
    flexDirection: 'row'
  }
})
export default DaysAsk


