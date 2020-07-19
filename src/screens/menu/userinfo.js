import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

// Local components
import { Color } from '../../global'

// Icon
import Avatar from './../../../assets/avatar.png'
import RightArrow from './../../../assets/right-arrow.png'
import TrustWhite from './../../../assets/trust-white.png'
import Trust from './../../../assets/trust-icon.png'



/**
 * UserInfo Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class UserInfo extends React.Component {

  componentDidMount(){
    if(Platform.OS === "android")
      TouchableNativeFeedback.Ripple()
  }

  render(){
    return (<View 
      style={{
        marginBottom: 20,
        marginTop: 20,
      }}
    > 
      <View style={[
        {
          position: 'absolute',
          left: 0,
          top: -4,
          height: 87,
          width: 87,
          zIndex: 10,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: 'white',
          marginHorizontal: 10
        },
        styles.shadow
        ]}>
          <Image 
            style={{
              height: 83,
              width: 83,
            }}
            source={ this.props.avatar ? { uri: this.props.avatar }: Avatar }/>
        </View>
      <TouchableOpacity
        onPress={ this.props.onPress } 
        activeOpacity={0.8}
        style={{
          backgroundColor: 'white',
          height: 77,
          flexDirection: 'row'
        }}> 
        
        {/* Seperatpr */}
        <View style={{
            width: 85,
            height: 77,
            marginHorizontal: 10
          }}>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center'
        }}>
          <View 
           style={{
             flexDirection: 'row',
             alignItems: 'center'
           }}
          >
            <Text
              style={{
                color: Color.color6,
                fontSize: 18
              }}
            >{ this.props.name }</Text>
            { this.props.isVarified && <Image 
              style={{
                height: 13,
                width: 10,
                marginLeft: 10
              }}
              source={Trust}/>}
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <Text
              style={{
                color: Color.color4,
                fontSize: 14
              }}
            >My balance:</Text>
            <Text
              style={{
                color: Color.color6,
                fontSize: 14,
                marginHorizontal: 5,
                fontWeight: 'bold'
              }}
            >${ this.props.balance }</Text>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 10,
          justifyContent: 'center'
        }}>
          <Image 
            style={{
              height: 12,
              width: 7
            }}
            source={RightArrow}/>
        </View>
      </TouchableOpacity>
      { !this.props.isVarified && <TouchableOpacity 
        onPress={ this.props.onPressVarifyAccount }
        activeOpacity={0.6}
        style={{
          backgroundColor: 'red',
          height:50,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View 
          style={{
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              marginHorizontal: 10
            }}
          >
            <Image 
              style={{
                height: 13,
                width: 10
              }}
              source={TrustWhite}/>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18
              }}
            >Verify account</Text>
          </View>
        </View>
      </TouchableOpacity>}
    </View>)
  }
}

UserInfo.defaultProps = {
  name: '',
  balance: 0,
  isVarified: false,
  avatar: null
}
const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 10
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
export default UserInfo