import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import Autolink from 'react-native-autolink'

// local components 
import Header from './../../Header'
import Input from './../../Input'
import PriceAsk from './priceask'
import DaysAsk from './daysask'
import TermsChanged from './termschanged'


// Icons
import BlueDoubleTick from './../../../../assets/blue-double-tick.png'
import DoubleTick from './../../../../assets/double-tick.png'
import DocxIcon from './../../../../assets/docx.png'
import Download from './../../../../assets/download.png'
import Camera from './../../../../assets/camera-icon.png'
import Clock from './../../../../assets/clock.png'
import Wallet from './../../../../assets/wallet.png'
import SandWatch from './../../../../assets/sand-watch.png'

// Config
import { normalize, Color } from '../../../global'

/**
 * Chat Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class Chat extends Component {

  state = {
    imgWidth: 0,
    imgHeight: 0,
    }
  componentDidMount() {

    if(this.props.image )
    Image.getSize(this.props.image, (width, height) => {
      // calculate image width and height 
      const screenWidth = Dimensions.get('window').width
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor
      this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
    })
  }

  render(){

    return(<View
      onPress={()=>{

      }}
      style={[
        styles.container, 
        styles.shadow, 
        this.props.context === "outgoing" && { alignItems: 'flex-end' },
        this.props.tail && { marginBottom: 5 },
        this.props.selected && { backgroundColor: Color.color7, opacity: 0.6 }
        ]}>
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={ this.props.onPress }>
        { this.props.type === "NORMAL" && <View 
          style={[ 
            styles.messageContainer, 
            this.props.context === "outgoing" ? styles.outgoing : styles.incoming, 
            !this.props.tail ? { borderRadius: 10 }: {} ]}>

          {/* Reply Segment */}
          {/* Reply on image */}
          { this.props.reply.type === "CHAT_IMAGE" && <View 
            style={{ 
              flexDirection: 'row', 
              backgroundColor: '#1590D6',
              borderRadius: 5
            }}>
            <View 
              style={[
                { 
                  marginLeft: 5, 
                  padding: 10, 
                  backgroundColor: '#EBEBEB', 
                  flex: 1 
                },
                !this.props.reply.previewImage && {
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5
                }
              ]}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Color.color6 }}>{ this.props.reply.title }</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image 
                  source={Camera}
                  style={{
                    width: 13,
                    height: 11.5,
                    position: 'absolute',
                    top: 5
                  }}
                />
                <Text 
                  numberOfLines={2}
                  style={{
                    fontSize: 16,
                    color: Color.color6
                  }}
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.props.reply.description }</Text>
              </View>
            </View>
            { this.props.reply.previewImage && <View >
              <Image 
                source={{ uri: this.props.reply.previewImage }}
                resizeMode = 'cover'
                style={{
                  height: 83 ,
                  width: 45,
                  overflow: 'hidden',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5
                }}
              />
            </View>}
          </View>}
          {/* Reply on Chat_Bid */}
          { this.props.reply.type === "CHAT_BID" && <View 
            style={{ 
              flexDirection: 'row', 
              backgroundColor: Color.color4 ,
              borderRadius: 5
            }}>
            <View 
              style={[
                { 
                  marginLeft: 5, 
                  paddingHorizontal: 10, 
                  paddingVertical: 5,
                  backgroundColor: '#EBEBEB', 
                  flex: 1 
                },
                !this.props.reply.previewImage && {
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5
                }
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: Color.color6 }}>{ this.props.reply.title }</Text>
                </View>
                <View 
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <View
                      style={{
                        justifyContent: 'center',
                        marginHorizontal: 5
                      }}
                    >
                      <Image 
                        source={SandWatch}
                        style={{
                          width: 7,
                          height: 12,
                        }}
                      />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: '500', color: Color.color4 }}>{ this.props.reply.bidStatus }</Text>
                </View>
              </View>
              <View 
                style={{
                  flexDirection: 'row'
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      justifyContent: 'center'
                    }}
                  >
                    <Image 
                      source={Clock}
                      style={{
                        width: 12,
                        height: 12,
                      }}
                    />
                  </View>
                  <Text 
                    numberOfLines={2}
                    style={{
                      fontSize: 16,
                      color: Color.color4
                    }}
                  >&nbsp;&nbsp;{ this.props.reply.duration }</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginLeft: 15
                    }}
                  >
                    <Image 
                      source={Wallet}
                      style={{
                        width: 15,
                        height: 12,
                      }}
                    />
                   </View>
                  <Text 
                    numberOfLines={2}
                    style={{
                      fontSize: 16,
                      color: Color.color4
                    }}
                  >&nbsp;&nbsp;${ this.props.reply.proposedPrice }</Text>
                </View>
              </View>
            </View>
            { this.props.reply.previewImage && <View >
              <Image 
                source={{ uri: this.props.reply.previewImage }}
                resizeMode = 'cover'
                style={{
                  height: 83 ,
                  width: 45,
                  overflow: 'hidden',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5
                }}
              />
            </View>}
          </View>}
          {/* To display link info based on props */}
          { this.props.link.url && <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#C3F0BC',
              borderRadius: 5
            }}
          >
              <View>
                <Image 
                  style={{
                    height: 71,
                    width: 71,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5
                  }}
                  source={{uri: this.props.link.previewImage}}/>
              </View>
              <View
                style={{
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500'
                  }}
                >Dribbble</Text>
                <Text
                  style={{
                    fontSize: 16,
                    opacity: 0.6
                  }}
                >dribbble.com</Text>
              </View>
            </View>}
          {/* To display image */}
          { this.props.image && <View >
            <Image 
              source={{ uri: this.props.image }}
              resizeMode = 'cover'
              style={{
                height: this.state.imgHeight,
                overflow: "hidden",
                borderRadius: 5,
                
              }}
              />
          </View>}
          {/* To display document */}
          { this.props.document.type && <View style={{
            }}>
            { this.props.document.previewImage && <Image 
              source={{ uri: this.props.document.previewImage }}
              style={{
                height: 100,
                overflow: "hidden",
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
          {/* To display chat text */}
          {this.props.text !== '' && <View style={{
            marginTop: 5
          }}>
            <Autolink 
              text={ this.props.text }
              style={styles.chatboxText} />
          </View>}
          {/* To display timesamp and doc information */}
          <View style={ this.props.text === '' ? styles.chatboxFooterAbsolute : {}}>
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
        </View>}
        { this.props.type === "PRICE_ASK" && <PriceAsk
          value={ this.props.inputPrice }
          onPressDone= { this.props.onPressDone }
          onChangePrice={ this.props.onChangePrice }
          timestamp= { this.props.timestamp }
        />}
        { this.props.type === "DAYS_ASK" && <DaysAsk
          value={ this.props.inputDays }
          onPressDone= { this.props.onPressDone }
          onChangeDays={ this.props.onChangeDays }
          timestamp= { this.props.timestamp }
        />}
        { this.props.type === "TERMS_CHANGED" && <TermsChanged
          newDuration={ this.props.newDuration }
          newPrice = { this.props.newPrice }
          onPressYes= { this.props.onPressYes }
          onPressNo= { this.props.onPressNo }
        />}
      </TouchableOpacity>
    </View>)
  }
}

// Default Props
Chat.defaultProps = {
  context: 'outgoing',
  reply: {
    // Can be CHAT_IMAGE, CHAT_BID, CHAT_NORMAL or null
    type: null,
    title: '',
    bidStatus: '',
    proposedPrice : 0,
    description: '',
    days: 0,
    previewImage : null
  },
  text: '',
  timestamp: '',
  image : null,
  link: {
    previewImage: null,
    title: '',
    domain: '',
    url: null
  },
  document: {
    type: null,
    uri: '',
    previewImage: null,
    pages: 0,
    size: 0,
    name: ''
  },
  tail: false,
  isRead: null,
  inputPrice: '',
  inputDays: '',
  newPrice: 0,
  newDuration: 0,
  // Will take 'NORMAL', 'PRICE_ASK', 'DAYS_ASK', 'TERMS_CHANGED' as value
  type: 'NORMAL',
  onPressDone: null,
  onChangePrice: null,
  onChangeDays: null,
  onPressYes: null,
  onPressNo: null
}

// Prop types
Chat.propTypes = {
  /**
   * Make chat component left or right based on context
   */
  context: PropTypes.oneOf([ 'outgoing', 'incoming' ]),
  /** Message to be rendered */
  text: PropTypes.string,
  /** To show time
   *  You must pass the time as string like 12 min, 5h
   */
  timestamp: PropTypes.string,
  /** Used when image is attached */
  image: PropTypes.string,
  /** Used to replay a message. Check default Props for more info
   */
  reply: PropTypes.object,
  /** Whether to show tail or not */
  tail: PropTypes.bool,
  /** What to do when download button is pressed */
  onPressDownload : PropTypes.func,
  isRead: PropTypes.oneOf([ true, false, null ]),
  type: PropTypes.oneOf([ 'NORMAL', 'PRICE_ASK', 'DAYS_ASK', 'TERMS_CHANGED' ])
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    paddingHorizontal: 10
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
  chatboxText: {
    fontSize: 16, 
    color: "#3D3D3D", 
    lineHeight: 21
  },
  chatboxFooterAbsolute: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  chatboxFooterTimeStamp : {
    fontSize: 12,
    flexDirection: 'row'
  }
});

export default Chat