import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native'

// Local components
import Chat from './../../components/ChatComponents/Chat'
import ChatAlert from '../../components/ChatComponents/ChatAlert'
import ChatJobDescription from './../../components/ChatComponents/ChatJobDescription'
import Label from './../../components/ChatComponents/label'
import ChatInput from './../../components/ChatComponents/ChatInput'
import ChatHeader from './chatheader'

// Icons 
import SandWatch from './../../../assets/sand-watch-blue.png'
import HandShake from './../../../assets/hand-shake-green.png'
import Block from './../../../assets/block.png'

// Images
import Background from './../../../assets/background-pattern.png'

// Config
import { Color, normalize } from '../../global'

/**
 * ChatScreen Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class ChatScreen extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      offsetY: 0,
      inputDays: '',
      inputPrice: '',
      direction:-1 ,
      offsetAfterScrollEnd: 0,
      scrollY: new Animated.Value(0.01),
    };
  }

  render(){
    return(<KeyboardAvoidingView behavior="height"  style={[ styles.container,
    ]}>
      <ChatHeader 
        username="John Doe"
        status="online"
        rating="4.5"
        oIcon = { this.props.navigation.getParam('oIcon',false) }
        varified= { this.props.navigation.getParam('varified',false) }
        jobStatus= { this.props.navigation.getParam('jobState','BID_NOT_PLACED')}
        bid= {{
          acceptedPrice: 10000,
          proposedPrice: 10000,
        }}
        onPressPhoneButton = {() => {
          alert('Call me')
        }}
        onPressBack = {() => {
          this.props.navigation.goBack()
        }}
      />
      {/* Background */}
      <Image 
        style={{
          position: 'absolute',
          resizeMode: 'repeat',
          backgroundColor: '#1C3F65'
        }}
        source={Background}/>
      <ScrollView
        scrollEventThrottle={8}
        style= {{
          paddingTop: 0,
          flex: 1
        }}
        contentContainerStyle={{
          marginTop: 5,
          paddingHorizontal: 0,
          paddingBottom: 10,
          position: 'relative'
        }}
      > 
        <Label text="TODAY"/>
        <ChatJobDescription
          title="Build website on WordPress platform using existing theme"
          body={<Text>Need a professional WordPress developer to create a stunning website based on existing theme. Currently we use the “Z-Power” theme - search it in the WP store. HTML/CSS/PHP changes will be necessary. Write your experience with portfolio samples when applying.</Text>}
          additionalInfo={[
            { 
              question: 'What WordPress version is used?',
              answer: '7.0.5'
            },
            { 
              question: 'PHP knowledge required?',
              answer: 'Yes'
            }
          ]}
          timestamp = "15 min"
          document = {
            {
              type: 'pdf',
              uri: 'https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg',
              previewImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_dictionary_of_the_Book_of_Mormon.pdf/page170-739px-A_dictionary_of_the_Book_of_Mormon.pdf.jpg',
              pages: 1,
              size: 2,
              name: 'Brand guidelines - 201',
              downloaded: false
            }
          }
          onPressDownload={()=>{
            alert("Download")
          }}
        />
        <Chat
          context={'outgoing'}
          link = {{
            previewImage: "https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg",
            url:"https://dribbble.com"
          }}
          text= "Cool image https://dribbble.com"
          timestamp = "15 min"
          tail = {true}
          type ='NORMAL'
        />
        <Chat
          context={'incoming'}
          image="https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg" 
          timestamp = "15 min"
          tail = {true}
          type ='PRICE_ASK'
          inputPrice={ this.state.inputPrice }
          onPressDone = {() => {
            alert('Change Price')
          }}
          onChangePrice={(text)=>{
            this.setState({ inputPrice: text })
          }}
        />
        <Chat
          context={'incoming'}
          image="https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg" 
          timestamp = "15 min"
          tail = {true}
          type ='DAYS_ASK'
          inputDays={ this.state.inputDays }
          onPressDone = {() => {
            alert('Change date')
          }}
          onChangeDays={(text)=>{
            this.setState({ inputDays: text })
          }}
        />
        <Chat
          context={'incoming'}
          tail = {true}
          newPrice= {300}
          newDuration= {1}
          type ='TERMS_CHANGED'
          onPressYes = {() => {
            alert('Yes')
          }}
          onPressNo = {() => {
            alert('No')
          }}
        />
        <Chat 
          text="Hi"
          timestamp = "5 min"
          tail = {true}
          reply = {{
            type: "CHAT_IMAGE",
            title: 'ME',
            description: "Sure, here’re some previews of related projects",
            previewImage: "https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg"
          }}
          onPressDownload = {()=>{
            alert('Download this file')
          }}
          onPress = {()=>{
            alert('Chat Pressed once')
          }}
          selected = {false}
        />
        <Chat 
          text="Oh, I can’t afford that on this stage. How about $1,550 at first?"
          timestamp = "5 min"
          tail = {true}
          context={'incoming'}
          reply = {{
            type: "CHAT_BID",
            title: 'My Bid',
            duration: '10 days',
            proposedPrice: 1000,
            bidStatus: 'Placed'
          }}
          onPressDownload = {()=>{
            alert('Download this file')
          }}
          onPress = {()=>{
            alert('Chat Pressed once')
          }}
          selected = {false}
          isRead= {true}
        />
        <Chat 
          text="Hi"
          timestamp = "5 min"
          tail = {true}
          context="incoming"
          reply = {{
            type: "CHAT_IMAGE",
            title: 'ME',
            description: "Sure, here’re some previews of related projects",
          }}
          onPressDownload = {()=>{
            alert('Download this file')
          }}
          onPress = {()=>{
            alert('Chat Pressed once')
          }}
          selected = {false}
          type ='NORMAL'
        />
        <Chat 
          text="Hi"
          timestamp = "5 min"
          tail = {true}
          onPressDownload = {()=>{
            alert('Download this file')
          }}
          onPress = {()=>{
            alert('Chat Pressed once')
          }}
          selected = {false}
          document = {
            {
              type: 'pdf',
              uri: 'https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg',
              previewImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_dictionary_of_the_Book_of_Mormon.pdf/page170-739px-A_dictionary_of_the_Book_of_Mormon.pdf.jpg',
              pages: 1,
              size: 2,
              name: 'Check this document',
              downloaded: false
            }
          }
          type ='NORMAL'

        />
        <Chat
          context= "incoming"
          text="Hi Ashwani"
          timestamp = "8 min"
          tail = {true}
          type ='NORMAL'
        />
        <Chat
          image="https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg" 
          text="Just wanted to know how things are going"
          timestamp = "15 min"
          onPress = {()=>{
            alert('Chat Pressed once')
          }}
          type ='NORMAL'
        />
        <Chat
          image="https://media.wired.com/photos/5dae0207c96358000859e5a9/master/pass/Gear-Google-Pixel-4-Front-and-Back-SOURCE-Google.jpg" 
          timestamp = "15 min"
          tail = {true}
          type ='NORMAL'
        />
        <ChatAlert
          headerIcon = {
            <Image 
              style={{
                width: 12,
                height: 20,
                marginRight: 10
              }}
              source={ SandWatch }
            />
          }
          type='warn' 
          title="Offer placed for $1500 in 14 days"
          body = {<View>
            <Text>Waiting for other side to approve...</Text>
          </View>}
        />
        <ChatAlert
          headerIcon = {
            <Image 
              style={{
                width: 32,
                height: 20,
                marginRight: 10
              }}
              source={ HandShake }
            />
          }
          type='success' 
          title="Offer placed for $1500 in 14 days"
          body = {<View>
            <Text
              style={{
                fontSize: 16
              }}
            >The employer has accepted your offer.</Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 20,
                fontWeight: 'bold',
                marginRight: 40
              }}
            >Ask your employer to deposit funds in this job </Text>
          </View>}
        />
        {/* Diffrent Chat alerts  */}
        <ChatAlert
          headerIcon = {
            <Image 
              style={{
                width: 20,
                height: 20,
                marginRight: 10
              }}
              source={ Block }
            />
          }
          type='error' 
          title="Your offer was rejected :("
          body = {<View>
            <Text
              style={{
                fontSize: 16,
                marginRight: 40
              }}
            >You are welcome to set a new price for the job</Text>
          </View>}
        />
        
      </ScrollView>
      {/* Chat input  */}
      <SafeAreaView>
        <ChatInput 
          value={ this.state.value }
          onPressCha
          />
      </SafeAreaView>
    </KeyboardAvoidingView>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.color4,
    flex: 1
  },
  searchContainer : {
    paddingHorizontal: 15
  }
})
export default ChatScreen