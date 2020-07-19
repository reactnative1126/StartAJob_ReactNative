import React, { Component } from 'react'
import { 
  View,
  Text,
  Image
} from 'react-native'

// local component 
import CutomButton from './../../components/Button'
import Background from './../../../assets/background.png'
import Chat from './../../components/ChatComponents/Chat'
class Home extends Component {
  render(){
    return(<View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={Background} style={{ position: 'absolute'}}/>
      <View style={{ marginBottom: 20 }}><Text>This is a test based on your requirement.</Text></View>
      <View>
        <CutomButton 
          onPress={ ()=> {
            this.props.navigation.navigate('PageStack')
          }}
          backgroundColor= "#28A745"
          title={'Start Test'}/>
      </View>
      <View>
          <Chat/>
      </View>

    </View>)
  }
}

export default Home