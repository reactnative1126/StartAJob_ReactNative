import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} from 'react-native'

// Local components
import { Color } from './../../global'

// Icons
import BlueDoubleTick from './../../../assets/blue-double-tick.png'
import DoubleTick from './../../../assets/double-tick.png'
import RateEmployer from './../../../assets/rate-employe.png'

/**
 * CardBody Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class CardBody extends React.Component {

  render() {
    let title = ''
    if (this.props.jobState === "BID_PLACED") {
      title = 'Set your price:'
    }
    else if (this.props.jobState === "BID_ACCEPTED")
      title = 'Funds in escrow :):'


    if (this.props.context === "MY_JOBS")
      title = "My payment:"

    return (<View style={styles.container}>
      <View style={styles.descriptionContainer}>
        {this.props.isRead === false || this.props.isRead === true ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={this.props.isRead ? BlueDoubleTick : DoubleTick}
            style={{
              height: 11,
              width: 18,
              marginRight: 5
            }} />
        </View> : null}
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={{ color: Color.color4, marginRight: 10 }}>{this.props.description}</Text>
        </View>
      </View>
      <View
        style={[
          {
            marginTop: 10,
            paddingHorizontal: 25
          }
        ]}
      >
        {(this.props.jobState === "BID_PLACED" || this.props.jobState === "BID_REJECTED") &&
          <View
            style={[
              {
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: this.props.jobState === "BID_REJECTED" ? '#ED4C5C' : Color.color8,
                borderRadius: 4,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row'
              },
              styles.shadow
            ]}>
            <View>
              <Text style={{ color: Color.color4, fontSize: 12 }}>{title}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>${this.props.bid.acceptedPrice}</Text>
                <Text style={{ color: Color.color4, fontSize: 12, alignSelf: 'flex-end', marginBottom: 2 }}> out of </Text>
                <Text style={{ color: Color.color6, fontSize: 16, fontWeight: 'bold' }}>{this.props.bid.proposedPrice > 0 ? `$` + this.props.bid.proposedPrice : '?'}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: Color.color4, fontSize: 12 }}>Complete in:</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: Color.color2, fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>{this.props.bid.days > 0 ? this.props.bid.days : '?'}</Text>
                {this.props.bid.days > 0 && <Text style={{ color: Color.color4, fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-end', marginBottom: 1 }}> Days</Text>}
              </View>
            </View>
          </View>}
        {(this.props.jobState === "BID_ACCEPTED" || this.props.jobState === "JOB_AWAIT_CONFIRMATION" || this.props.jobState === "JOB_IN_PROGRESS") &&
          <View
            style={[
              {
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: this.props.jobState === "JOB_AWAIT_CONFIRMATION" ? '#FF9900' : '#27AB44',
                borderRadius: 4,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row'
              },
              styles.shadow
            ]}>
            <View>
              <Text style={{ color: Color.color4, fontSize: 12 }}>{title}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>${this.props.bid.acceptedPrice}</Text>
                <Text style={{ color: Color.color4, fontSize: 12, alignSelf: 'flex-end', marginBottom: 2 }}> out of </Text>
                <Text style={{ color: Color.color6, fontSize: 16, fontWeight: 'bold', alignSelf: 'flex-end' }}>${this.props.bid.proposedPrice > 0 ? this.props.bid.proposedPrice : '?'}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: Color.color4, fontSize: 12 }}>Complete in:</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: Color.color2, fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>{this.props.bid.days}</Text>
                <Text style={{ color: Color.color4, fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-end', marginBottom: 1 }}> Days</Text>
              </View>
            </View>
          </View>}
        {this.props.jobState === "BID_COMPLETED_RELEASED" &&
          <View
            style={[
              {
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row'
              },
              styles.shadow
            ]}>
            <View>
              <Text style={{ color: Color.color4, fontSize: 12 }}>Paid :)</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>+${this.props.bid.acceptedPrice}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#1590D6', fontSize: 12 }}>Rate employer</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                  source={RateEmployer}
                  style={{
                    height: 25,
                    width: 50,
                    marginTop: 2
                  }} />
                <Text style={{ color: Color.primary, fontSize: 18, fontWeight: 'bold', marginLeft: -5 }}>?</Text>
              </View>
            </View>
          </View>}
      </View>
    </View>)
  }
}

CardBody.defaultProps = {
  isRead: null,
  jobState: null,
  bid: {
    acceptedPrice: 0,
    proposedPrice: 0,
    days: 0,
    status: ''
  },
  description: "No description",
  // It will take JOBS or MY_JOBS
  context: 'JOBS'
}
const styles = StyleSheet.create({
  container: {
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  shadow: Platform.os === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  } : {
      elevation: 3
    }
})
export default CardBody