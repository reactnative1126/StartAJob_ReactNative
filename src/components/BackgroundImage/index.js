import React, { Fragment } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

// Local components
import { Color } from './../../global'

// Images
import BackgroundPattern from './../../../assets/background-pattern-gray.png'

/**
 * BackgroundImage Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class BackgroundImage extends React.Component {
    row = (num) => {
        let content = []
        let precent = this.props.precent || 0.20
        let Background = this.props.source || BackgroundPattern
        let opacity = this.props.opacity || 0.1 

        let screenHeight = Dimensions.get('screen').height
        let imageWidth = Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent )
        let imageHeight = Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent )
        let numRows = Math.ceil((screenHeight/imageHeight))
        console.log(numRows)
        for(let i = 0 ; i < numRows; i++ ){
            content.push(<View key={i} style = {{
                flexDirection: 'row',
                height: Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent )
              }}>
              <Image 
                  style={{
                  width: Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent ),
                  height: Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent ),
                  backgroundColor: '#E3E3E3',
                  opacity
                  }}
                  source={Background}/>
                  <Image 
                  style={{
                  width: Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent ),
                  height: Dimensions.get('screen').width - ( Dimensions.get('screen').width * precent ),
                  backgroundColor: '#E3E3E3',
                  opacity
                  }}
                  source={Background}/>
              </View>)
        }
        return content
        
    }
  render(){
    return(<View style={{
        position:'absolute',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
      }}>
        
        {this.row(2)}
            
      </View>)
  }
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 15
  }
})
export default BackgroundImage