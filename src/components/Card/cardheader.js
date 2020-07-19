import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

// Local components
import { Color } from './../../global'

// Icons
import MapIcon from './../../../assets/map.png'
import Avatar from './../../../assets/avatar.png'
import RightArrow from './../../../assets/right-arrow.png'
import NewMessage from './../../../assets/new-message-icon.png'
import Flag from './../../../assets/flag.png'


/**
 * CardHeader Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */

class CardHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* For avatar */}
        <View style={styles.avatarContainer}>
          <View style={{ paddingHorizontal: 5 }}>
            <Image source={!this.props.avatarUri ? Avatar : { uri: this.props.avatarUri }} style={{ height: 48, width: 48 }} />
          </View>
          <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 5 }}>
            <Image source={!this.props.countryFlag ? Flag : { uri: "https://www.startajob.com/images/flags/" + this.props.countryFlag + ".png" }} style={{ height: 18, width: 25 }} />
          </View>
        </View>
        {/* User details */}
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5 }}>
          <View style={{ flex: 1 }}>
            <View style={styles.nameContainer}>
              <Text
                style={[{
                  fontSize: 18,
                  color: Color.color6
                },
                this.props.jobState === "NEW_JOB" || this.props.jobState === "NEW_MESSAGE" ? { fontWeight: 'bold' } : {}]}
                numberOfLines={1}
              >
                {this.props.userName}
              </Text>
              {!this.props.timestampCustom ? <Text style={{ fontSize: 12, color: Color.color4 }}>{this.props.timestamp}</Text> : this.props.timestampCustom}
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 1, marginTop: 2 }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[{
                      fontSize: 13,
                      color: Color.color6
                    },
                    this.props.jobState === "NEW_JOB" || this.props.jobState === "NEW_MESSAGE" ? { fontWeight: 'bold' } : {}]}
                    numberOfLines={1}
                  >{this.props.jobTitle}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'column' }}>
                    <View style={styles.addressContainer}>
                      {/* User's Address Container */}
                      <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View>
                          {/* Map logo */}
                          <Image source={MapIcon} style={{ height: 18, width: 12 }} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          {/* Distance */}
                          <Text
                            style={[{
                              fontSize: 14,
                              color: Color.color6
                            },
                            this.props.jobState === "NEW_JOB" ? { fontWeight: 'bold' } : {}
                            ]}>{this.props.distance}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          {/* Address */}
                          <View style={{ marginTop: 4 }}>
                            <Text style={{ fontSize: 10, color: Color.color6 }} numberOfLines={1} >{this.props.address}</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                      </View>
                    </View>
                  </View>
                  <View>
                  </View>
                </View>
              </View>
              {this.props.jobState === "NEW_JOB" && <View style={{ justifyContent: 'flex-end', paddingHorizontal: 5 }}>
                <Image source={NewMessage} style={{ height: 20, width: 20, marginBottom: 4 }} />
              </View>}
              {this.props.jobState === "NEW_MESSAGE" && <View style={{ justifyContent: 'flex-end', paddingHorizontal: 5 }}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    marginBottom: 4,
                    backgroundColor: '#315FAD',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={{ color: 'white', fontSize: this.props.newMessageCount > 9 ? 10 : 14 }}>{this.props.newMessageCount}</Text>
                </View>
              </View>}
            </View>
          </View>
          <View style={{ justifyContent: 'flex-end', paddingHorizontal: 5 }}>
            <Image source={RightArrow} style={{ height: 14, width: 8, marginBottom: 6 }} />
          </View>
        </View>
      </View>
    )
  }
}

// Default Props
CardHeader.defaultProps = {
  jobState: null,
  userName: 'No name',
  jobTitle: 'No job title',
  distance: '',
  avatarUri: null,
  countryFlag: null,
  address: 'No address',
  timestamp: '',
  timestampCustom: null,
  newMessageCount: 0,
  distance: '0 km'
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  nameContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: 4
  },
  avatarContainer: {

  }
})
export default CardHeader