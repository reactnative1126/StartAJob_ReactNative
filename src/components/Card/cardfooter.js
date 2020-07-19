import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

// Local components
import { Color, normalize } from './../../global'

// Icons
import Home from './../../../assets/home-icon.png'
import FullTime from './../../../assets/fulltime-job-icon.png'
import OneTime from './../../../assets/one-time-job-icon.png'

/**
 * CardFooter Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class CardFooter extends React.Component {

  render() {
    let jobTypeIcon
    if (this.props.jobType === 2) {
      jobTypeIcon = FullTime
    }
    else if (this.props.jobType === 1) {
      jobTypeIcon = OneTime
    }
    else {
      jobTypeIcon = Home
    }
    return (<View style={styles.container}>
      <View>
        <Image
          style={{
            height: 15,
            width: 15,
          }}
          source={jobTypeIcon}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 15
        }}
      >
        <Text
          style={{
            color: Color.color4,
            fontSize: 12,
            fontWeight: 'bold'
          }}
        >
          {this.props.category + " > "}
        </Text>
        <Text numberOfLines={1} style={{ flex: 1, fontSize: 12 }}>
          {this.props.subCategories.map((item, key) => {
            return (
              item.SkillName + ", "
            )
          })}
        </Text>
      </View>
    </View>)
  }
}

CardFooter.defaultProps = {
  category: 'No Category',
  subCategories: 'No Sub Categories',
  jobType: 'FULL_TIME'
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15
  }
})
export default CardFooter