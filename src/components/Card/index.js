import React from 'react'
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity
} from 'react-native'

// Local components
import CardHeader from './cardheader'
import CardBody from './cardbody'
import CardFooter from './cardfooter'

// Config
import { Color } from './../../global'

class Card extends React.Component {

  componentDidMount() {
    if (Platform.OS === "android")
      TouchableNativeFeedback.Ripple()
  }
  render() {
    let content = <View
      style={[
        styles.container,
        this.props.jobState === "NEW_JOB" ? styles.newJob : { borderBottomWidth: this.props.separater ? 1 : 0, borderBottomColor: Color.color4 }]}>
      <CardHeader
        jobState={this.props.jobState}
        jobTitle={this.props.jobTitle}
        userName={this.props.userName}
        avatarUri={this.props.avatarUri}
        countryFlag={this.props.countryFlag}
        address={this.props.address}
        timestamp={this.props.timestamp}
        timestampCustom={this.props.timestampCustom}
        newMessageCount={this.props.newMessageCount}
        distance={this.props.distance}
      />
      <CardBody
        isRead={this.props.isRead}
        jobState={this.props.jobState}
        bid={this.props.bid}
        description={this.props.description}
        context={this.props.context}
      />
      <CardFooter
        category={this.props.category}
        subCategories={this.props.subCategories}
        jobType={this.props.jobType}
      />
    </View>

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={this.props.onPress}
        style={{
          backgroundColor: '#fff'
        }}
      >
        {content}
      </TouchableOpacity>
    )

  }
}

// Default Props
Card.defaultProps = {
  jobState: null,
  jobTitle: '',
  userName: '',
  timestamp: '',
  isRead: null,
  jobType: null,
  bid: {},
  address: 'No address',
  avatarUri: null,
  countryFlag: null,
  category: "No Category",
  subCategories: "No Sub Categories",
  description: '',
  newMessageCount: 0,
  timestampCustom: null,
  distance: '',
  context: 'JOBS',
  separater: true
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  newJob: {
    margin: 5,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Color.color8,
    backgroundColor: "white"
  }
})
export default Card