import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

// Local components
import { Color } from './../../global'
import Header from '../../components/Header'

// Icons
import LeftArrow from './../../../assets/left-arrow.png'
import Phone from './../../../assets/phone-icon.png'
import Avatar from './../../../assets/avatar.png'
import Star from './../../../assets/star-icon.png'
import oIcon from './../../../assets/o-icon.png'
import Trust from './../../../assets/trust-icon.png'
import MapIcon from './../../../assets/map.png'

/**
 * ChatHeader Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class ChatHeader extends React.Component {
  render(){
    return(<Header 
      type="custom"
    >
      <View style={[ styles.shadow, { zIndex: 100 } ]}>
        <View 
          style={{ 
            justifyContent: "center", 
            alignItems: "center", 
            height: 56 , 
            backgroundColor: "#FAFAFA", 
            flexDirection: 'row' 
          }}>
          <TouchableOpacity 
            onPress={this.props.onPressBack}
            style={{
              paddingHorizontal: 15
            }}>
            <Image 
              style= {{
                height: 20,
                width: 11
              }}
              source={LeftArrow}/>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center' }}>
                <Image
                  style={{
                    height: 30,
                    width: 30
                  }}  
                  source={ this.props.avatar ? { uri: this.props.avatar } : Avatar } />
                  { this.props.oIcon && <View style={{
                    bottom: -5,
                    right: -7,
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius:50,
                    borderColor: 'white'
                  }}>
                    <Image
                      style={{
                        height: 16,
                        width: 15,
                      }}  
                      source={oIcon}/>
                  </View>}
              </View>
              <View style={{
                paddingHorizontal: 10
              }}>
                <View style={{ marginBottom: -2, flexDirection: 'row' }}>
                  <Text 
                    style={{
                      fontWeight: 'bold',
                      fontSize: 17,
                      color: Color.color6
                    }}
                  >{ this.props.username }</Text>
                  { this.props.varified && <Image
                    style={{
                      height: 13,
                      width: 10,
                      marginLeft: 5,
                      marginRight: 5,
                      alignSelf: 'center',
                    }}   
                    source={Trust}/>}
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text 
                    style={{
                      fontSize: 10,
                      color: Color.color7,
                      marginLeft: 5,
                      marginRight: 5

                    }}
                  >{ this.props.status }</Text>
                  <Image
                    style={{
                      height: 9,
                      width: 9,
                      marginLeft: 5,
                      marginRight: 5,
                      marginTop: 2
                    }}  
                    source={Star}/>
                  <Text 
                      style={{
                        fontSize: 10,
                        color: Color.color4
                      }}
                    >{ this.props.rating }</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            paddingHorizontal: 10
          }}>
            <TouchableOpacity
              onPress={this.props.onPressPhoneButton}
              style={[{
                backgroundColor: Color.color7,
                paddingVertical: 9,
                paddingHorizontal: 25,
                borderRadius: 4,
                alignItems: "center"
              },
              styles.shadow
              ]}>
              <View style={{ flexDirection: 'row' }}>
                <View><Image 
                  style= {{
                    height: 18,
                    width: 18
                  }}
                  source={Phone}/></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View 
          style={{ 
            alignItems: "center", 
            height: 50 , 
            backgroundColor: "#FAFAFA", 
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: Color.color7,
          }}>
          <View 
            style={{
              paddingHorizontal: 10
            }}
          >
            <Image 
              source={MapIcon} 
              style={{ 
                height: 20, 
                width: 14 
              }}/>
          </View>
          <View style={{  marginTop: 4, flex: 1 }}>
            <Text style={{ fontSize: 12, color: Color.color6 }} numberOfLines={1} >Saint Mark St 124f, LA, CA, 0421431</Text>
            <Text style={{ fontSize: 12, color: Color.color6, fontWeight: 'bold' }} numberOfLines={1} >5.5 km</Text>
          </View>

          { this.props.jobStatus === "BID_NOT_PLACED" && <View 
            style={{  
              paddingHorizontal: 15,
              marginTop: 0 
              }}>
            <Text 
              style={{ 
                fontWeight: 'bold',
                fontSize: 14, 
                color: "#27AB44" }} numberOfLines={1} >Open for</Text>
            <Text 
              style={{
                fontWeight: 'bold',
                fontSize: 14, 
                color: "#27AB44" 
              }} numberOfLines={1} >bidding</Text>
          </View>}
          { this.props.jobStatus === "BID_PLACED" && <View 
            style={{  
              paddingHorizontal: 15,
              marginTop: 0
              }}>
            <Text 
              style={{ 
                fontSize: 9, 
                color: "#8C8C8C" }} numberOfLines={1} >My payment</Text>
            <Text 
              style={{ 
                fontWeight: 'bold',
                fontSize: 14, 
                color: "red" }} numberOfLines={1} >
                  ${this.props.bid?.acceptedPrice}
            </Text>
            <Text 
              style={{
                fontWeight: 'bold',
                fontSize: 9, 
                color: "#8C8C8C" 
              }} numberOfLines={1} >Out of <Text style={{ color: Color.color6 }}>${this.props.bid?.proposedPrice}</Text></Text>
          </View>}
          { this.props.jobStatus === "BID_ACCEPTED" && <View 
            style={{  
              paddingHorizontal: 15,
              marginTop: 0
              }}>
            <Text 
              style={{ 
                fontSize: 9, 
                color: "#8C8C8C" }} numberOfLines={1} >My payment</Text>
            <Text 
              style={{ 
                fontWeight: 'bold',
                fontSize: 14, 
                color: "green" }} numberOfLines={1} >
                  ${this.props.bid?.acceptedPrice}
            </Text>
            <Text 
              style={{
                fontWeight: 'bold',
                fontSize: 9, 
                color: "#8C8C8C" 
              }} numberOfLines={1} >Out of <Text style={{ color: Color.color6 }}>${this.props.bid?.proposedPrice}</Text></Text>
          </View>}
          { this.props.jobStatus === "BID_REJECTED" && <View 
            style={{  
              paddingHorizontal: 15,
              marginTop: 0
              }}>
            <Text 
              style={{ 
                fontWeight: 'bold',
                fontSize: 14, 
                color: "#ED4C5C" }} numberOfLines={1} >
                  rejected
            </Text>
          </View>}
        </View>
      </View>
    </Header>)
  }
}

ChatHeader.defaultProps = {
  username:'',
  status: 'online',
  rating: '0',
  avatar: null,
  oIcon : false,
  varified: false,
  bid: {
    acceptedPrice: 0,
    proposedPrice: 0,
  },
  jobStatus: 'BID_NOT_PLACED'
}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  },
  shadow : Platform.OS === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  } : {
    elevation: 3
  }
})
export default ChatHeader