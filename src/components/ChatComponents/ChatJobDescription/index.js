import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native'

// Local components
import { Color, normalize } from '../../../global'

// Icon
import BlueDoubleTick from './../../../../assets/blue-double-tick.png'
import DoubleTick from './../../../../assets/double-tick.png'
import DocxIcon from './../../../../assets/docx.png'
import Download from './../../../../assets/download.png'

/**
 * ChatJobDescription Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class ChatJobDescription extends React.Component {

  renderAdditionalInfo = () => {
    return this.props.additionalInfo.map( ({ question, answer },index) => {
      return(<View key={index}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: Color.color6 }}>{ question }</Text>
        <Text style={{ fontSize: 16, color: Color.color6 }}>{ answer} </Text>
      </View>)
    })
  }
  render(){
   return (<View style={[
        styles.container,
        styles.shadow,
      ]}>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            paddingVertical: 7,
            paddingHorizontal: 5,
            flexDirection: 'row'
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.color6
              }}
            >{ this.props.title }</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            paddingVertical: 7,
            paddingHorizontal: 5,
            flexDirection: 'row'
          }}
        >
          <View>
            { this.props.body }
          </View>
        </View>
        {this.props.additionalInfo.length > 0 && <View style={{
          marginBottom: 20,
          paddingHorizontal: 5,
          paddingTop: 4
        }}>
          <Text
              style={{
                fontSize: 16,
                color: Color.color4
              }}
            >Additional info</Text>
            {this.renderAdditionalInfo()}
        </View>}
        { this.props.document.type && <View style={{
            }}>
            { this.props.document.previewImage && <Image 
              source={{ uri: this.props.document.previewImage }}
              resizeMode= 'cover'
              style={{
                height: 100,
                overflow: 'hidden',
                borderRadius: 5
              }}
              />}
              <View style={{
                flexDirection: 'row',
                backgroundColor: '#F0F0F0',
                width: '100%',
                padding: 10
              }}>
                <View>
                  <Image
                    source={DocxIcon}
                    style={{
                      width:24,
                      height:31
                    }}
                  />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                  <Text 
                  numberOfLines={1}
                  style={{
                    fontSize: normalize(16),
                    color: Color.color6
                  }}>{ this.props.document.name }</Text>
                </View>
                <TouchableOpacity onPress={ this.props.onPressDownload }>
                  <Image
                    source={Download}
                    style={{
                      width:33,
                      height:33
                    }}
                  />
                </TouchableOpacity>
              </View>  
          </View>}
          <View>
            <View style={[ styles.chatboxFooterTimeStamp, this.props.document.type ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' } ]}>
              {this.props.document.type && <View>
                  <Text style={{ color: this.props.text === ''? "white": "#A4A4A4", fontSize: normalize(12) }}>{this.props.document.pages}&nbsp;page{this.props.document.pages > 1 && 's'}&nbsp;•&nbsp;{ this.props.document.type.toUpperCase() }&nbsp;•&nbsp;{ this.props.document.size }&nbsp;mb</Text>
              </View>}
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: this.props.text === ''? "white": "#A4A4A4", fontSize: normalize(12) }}>{ this.props.timestamp }</Text>
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
      </View>)
   
  }
}

ChatJobDescription.defaultProps = {
  // This will take OFFER_APPROVAL, OFFER_ACCEPTED, OFFER_REJECTED
  headerIcon: null,
  title: '',
  body: null,
  type: 'warn',
  isRead: null,
  additionalInfo:[],
  document: {
    type: null,
    uri: '',
    previewImage: null,
    pages: 0,
    size: 0,
    name: ''
  },
  onPressDownload: null
}

const styles = StyleSheet.create({
  container : {
    marginVertical: 5,
    marginBottom: 0,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    paddingBottom: 5
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
    flexDirection: 'row',
    paddingHorizontal: 5
  }
})
export default ChatJobDescription