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

// Config
import { Color } from './../../../global'

/**
 * TermsChanged Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class TermsChanged extends React.Component {
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
        
          <View
            style={{
              marginBottom: 20
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >The employer changed terms to&nbsp;<Text style={{ fontWeight: 'bold' }}>${ this.props.newPrice }</Text>&nbsp;in&nbsp;<Text style={{ fontWeight: 'bold' }}>{ this.props.newDuration } day{this.props.newDuration > 1 && 's'}.</Text></Text>
          </View>
          <View
            style={{
              marginBottom: 10
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold'
              }}
            >Do you accept?</Text>
          </View>
          
          <View
            style={{
              flexDirection: 'row'
            }}
          > 
            <View style={{ 
              paddingHorizontal: 2, 
              justifyContent: 'center',
              flex: 1,
              marginRight: 2
            }}>
              <TouchableOpacity 
                onPress={this.props.onPressYes }
                style={[{
                  paddingHorizontal: 25,
                  borderRadius: 4,
                  backgroundColor: '#51C45D',
                  paddingVertical: 14,
                  alignItems: "center"
                }, styles.shadow ]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{
                    justifyContent: 'center',
                    marginRight: 10,
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
                        fontSize: 21,
                        color: '#fff',
                        fontWeight: 'bold'
                      }}
                    >Yes</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ 
              paddingHorizontal: 2, 
              justifyContent: 'center' 
            }}>
              <TouchableOpacity 
                onPress={this.props.onPressNo }
                style={[{
                  paddingHorizontal: 25,
                  borderRadius: 4,
                  backgroundColor: '#ED4C5C',
                  paddingVertical: 14,
                  alignItems: "center"
                }, styles.shadow ]}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 21,
                        color: '#fff'
                      }}
                    >No</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>          
      </View>)
  }
}

TermsChanged.defaultProps = {
  tail: true,
  newPrice: 0,
  newDuration: 0
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
})
export default TermsChanged


