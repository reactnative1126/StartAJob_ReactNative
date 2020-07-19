import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

// Local components
import Alert from './../../components/Alerts'
import CutomButton from './../../components/Button'

// Icons
import NoWorkArea from './../../../assets/no-work-area-icon.png'

// Config
import { Color, normalize  } from './../../global'
/**
 * WorkAreaNotSet Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class WorkAreaNotSet extends React.Component {
  render(){
    return(<Alert
      title={'Work areas not set'}
      icon={NoWorkArea}
      body={
        <View style={{
          marginTop: 10
        }}>
          <View
            style={{
              paddingVertical: 10
            }}
          >
            <Text 
              style={{
                color: Color.color6,
                fontSize: normalize(14)
              }}
            >Please configure your work areas in order to see related jobs</Text>
          </View>
          <View
            style={{
                paddingTop: 10,
                alignItems: 'center'
              }}
          >
            <CutomButton
              style={{
                borderRadius: 4,
                paddingVertical: 15,
                width: 200
              }}
              onPress={ this.props.onPressConfigure }
              fontWidth={'300'}
              fontWeight={'bold'}
              backgroundColor= { Color.color7 }
              title={'Configure'}/>
          </View>
        </View>
      }
    />)
  }
}

WorkAreaNotSet.defaultProps = {
  onPressConfigure: null
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  }
})
export default WorkAreaNotSet