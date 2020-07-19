import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import PropTypes from 'prop-types'
// Local components
import Input from './../../Input'
import ChangeJobStatus from './../ChangeJobStatus'

// Icon
import BagIconBlue from './../../../../assets/bag-icon-blue.png'
import BagIconBlueOutline from './../../../../assets/bag-icon-blue-outline.png'
import Clip from './../../../../assets/clip.png'
import Camera from './../../../../assets/camera-icon.png'


// Config
import { Color } from './../../../global'
import { Platform } from '@unimodules/core';

/**
 * ChatInput Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class ChatInput extends React.Component {
  state = {
    overlay: false
  }

  render(){
    return(<View style={ styles.container }> 

      { this.state.overlay && <ChangeJobStatus
        onPressMarkJobCompleted={ this.props.onPressMarkJobCompleted }
        onPressChangeTerms={ this.props.onPressChangeTerms }
      />}
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          minHeight:60,
        }}
      >
        <TouchableOpacity
          onPress={()=>{
            this.setState({ overlay: !this.state.overlay })
          }}
          style={{
            padding: 5
          }}
        >
          <Image 
            style={{
              width: 18,
              height: 17
            }}
            source={ !this.state.overlay? BagIconBlue : BagIconBlueOutline } />
        </TouchableOpacity>
        <View style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#E3E3E3',
          backgroundColor: '#FFF',
          paddingHorizontal: 15,
          borderRadius: 50,
          marginHorizontal: 10
        }}>
          <TextInput 
            placeholder={ 'Type something' }
            placeholderTextColor={ this.props.placeholderTextColor || 'gray' }
            onChangeText={ this.props.onChangeChatInput }
            keyboardType={ this.props.keyboardType }
            value = { this.props.value }
            style={{
              flex: 1,
              fontSize: 13
            }}/>
        </View>
        <TouchableOpacity
          style={{
            padding: 5
          }}
          onPress={ this.props.onPressAttachment }
        >
          <Image 
            style={{
              width: 11,
              height: 22
            }}
            source={ Clip } />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={ this.props.onPressCamera }
          style={{
            padding: 5,
          }}
        >
          <Image 
            style={{
              width: 20,
              height: 18
            }}
            source={ Camera } />
        </TouchableOpacity>
      </View>
    </View>)
  }
}

/** Default Props */
ChatInput.defaultProps = {
  onChangeChatInput: null,
  onPressChangeTerms: null,
  onPressMarkJobCompleted: null,
  onPressCamera: null,
  value: '',
  onPressAttachment: null
}

/** Prop Type */
ChatInput.propTypes = {
  /** Description of prop "baz". */
  value: PropTypes.string,
  /**
   * Gets called when the user starts typing
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChangeChatInput: PropTypes.func,
  /** Called when changed terms button is pressed */
  onPressChangeTerms: PropTypes.func,
  /** Called when Mark Job Done button is pressed */
  onPressMarkJobCompleted: PropTypes.func,
  /** Called when camera button is pressed */
  onPressCamera: PropTypes.func,
  /** Called when attachment button is pressed */
  onPressAttachment: PropTypes.func
}

const styles = StyleSheet.create({
  container : {
  }
})
export default ChatInput