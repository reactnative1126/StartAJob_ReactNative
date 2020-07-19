import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
  Platform,
  AsyncStorage,
  Picker
} from 'react-native'

// Local components
import Header from './../../components/Header'
import ItemContainer from './../../components/ItemContainer'
import Item from './../../components/Item'
import UserInfo from './userinfo'
import BackgroundImage from './../../components/BackgroundImage'

// Icon
import Avatar from './../../../assets/avatar.png'
import RightArrow from './../../../assets/right-arrow.png'
import MyBusinessIcon from './../../../assets/my-business.png'
import MyWork from './../../../assets/my-work.png'
import WalletBlue from './../../../assets/wallet-blue.png'
import Emoji from './../../../assets/emoji.png'
import WithdrawFund from './../../../assets/withdraw-fund.png'
import DepositFund from './../../../assets/deposit-fund.png'
import Glob from './../../../assets/glob.png'
import Setting from './../../../assets/setting.png'
import Help from './../../../assets/help.png'
import LoginBlack from './../../../assets/login-black.png'

// Images
import Background from './../../../assets/background-pattern-gray.png'

// Config
import { Color, normalize } from '../../global'

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      offsetY: 0,
      direction: -1,
      offsetAfterScrollEnd: 0,
      scrollY: new Animated.Value(0.01),
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        {/* Header Section */}
        <Header
          type="custom"
        >
          <View
            style={[{
              justifyContent: "center",
              height: 56,
              paddingHorizontal: 15,
              backgroundColor: Color.primary,
              zIndex: 10,
            }
            ]}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 24
              }}>Settings</Text>
          </View>
        </Header>
        <BackgroundImage />
        <ScrollView>
          <UserInfo
            name={'Mark Rusenfeld'}
            balance={350}
            isVarified={false}
            onPress={() => {
              alert('Do something')
            }}
            onPressVarifyAccount={() => {
              alert('Go to varification page')
            }}
          />
          <ItemContainer>
            <Item
              icon={
                <Image
                  style={{
                    height: 13,
                    width: 18
                  }}
                  source={MyBusinessIcon} />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="My business"
            />
            <Item
              icon={
                <Image
                  style={{
                    width: 13,
                    height: 18,
                    marginHorizontal: 3

                  }}
                  source={MyWork} />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="My work areas"
            />
          </ItemContainer>
          <ItemContainer>
            <Item
              icon={
                <Image
                  style={{
                    height: 16,
                    width: 20
                  }}
                  source={WalletBlue} />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="Financial & Packages"
            />
            <Item
              icon={
                <Image
                  style={{
                    height: 19,
                    width: 20
                  }}
                  source={WithdrawFund} />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="Withdraw funds"
            />
            <Item
              icon={
                <Image
                  style={{
                    height: 17,
                    width: 20
                  }}
                  source={DepositFund} />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="Deposit funds"
            />
          </ItemContainer>
          <ItemContainer>
            <Item
              icon={
                <Image
                  style={{
                    height: 18,
                    width: 18
                  }}
                  source={Setting}
                />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="Settings"
            />
            <Item
              icon={
                <Image
                  style={{
                    height: 18,
                    width: 18
                  }}
                  source={Glob}
                />
              }
              style={{
                height: 62
              }}
              text="Language"
              rightComponent={<View style={{
                marginRight: -10
              }}>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 50, width: 120, color: Color.color4 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }>
                  <Picker.Item label="English" value="english" />
                  <Picker.Item label="Hebrew" value="hebrew" />
                  <Picker.Item label="Russian" value="russian" />
                  <Picker.Item label="Arabic" value="arabic" />
                </Picker>
              </View>}
            />
          </ItemContainer>
          <ItemContainer>
            <Item
              icon={
                <Image
                  style={{
                    height: 18,
                    width: 18
                  }}
                  source={Help}
                />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="Help"
            />
            <Item
              icon={
                <Image
                  style={{
                    height: 18,
                    width: 18
                  }}
                  source={Emoji}
                />
              }
              onPress={() => {
                alert('Do Something')
              }}
              text="Tell a friend"
            />
          </ItemContainer>
          <ItemContainer>
            <Item
              icon={
                <Image
                  style={{
                    height: 18,
                    width: 16
                  }}
                  source={LoginBlack}
                />
              }
              onPress={() => {
                AsyncStorage.setItem('LOGGED', "false");
                this.props.navigation.navigate('Login');
              }}
              text="Log out"
            />
          </ItemContainer>
        </ScrollView>
      </View >)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3E3E3',
    flex: 1
  },
  searchContainer: {
    paddingHorizontal: 15,
  },
  shadow: Platform.os === "ios" ? {
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
  shadow: Platform.OS === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  } : {
      elevation: 5
    }
})
export default Menu