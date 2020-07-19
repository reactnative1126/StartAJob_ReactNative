import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Linking,
  AsyncStorage
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Redux
import { connect } from 'react-redux';
import { setUser } from '@modules/account/actions';

// Icons or Images
import Logo from './../../../assets/logo.png'
import LoginIcon from './../../../assets/login.png'
import FacebookIcon from './../../../assets/facebook_icon.png'
import SignIn from './../../../assets/sign-in.png'

// Components
import CutomButton from './../../components/Button'

// Functions
import { verifyEmail, verifyPhone, verifyLength } from '@utils/Functions';

// Globals
import { Color } from './../../global'
import { Platform } from '@unimodules/core';
import configs from '@utils/configs';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }

  onPressAlert = () => {
    alert("I am a button")
  }
  async componentDidMount() {
    if (await AsyncStorage.getItem('LOGGED') === "true") {
      this.props.navigation.navigate('Screen')
    }
  }

  onForgotPassword = () => {
    const { email } = this.state;
    if (!email) {
      this.setState({ errorMessage: 'Should not be empty' })
    } else {
      if (verifyEmail(email)) {
        this.setState({ errorMessage: '' });
        alert("Password reset instruction have been sent to " + email);
      } else {
        this.setState({ errorMessage: 'Email is invailed' });
      }
    }
  }

  onLogin = () => {
    const { email, password } = this.state;
    if (!email) {
      this.setState({ errorMessage: 'Enter your email address' })
    } else {
      if (verifyEmail(email)) {
        this.setState({ errorMessage: '' });
        if (!password) {
          this.setState({ errorMessage: 'Enter your password' })
        } else {
          if (verifyLength(password, 6)) {
            this.setState({ errorMessage: '' });
            this.onSubmit();
          } else {
            this.setState({ errorMessage: 'Enter more 6 charactors' });
          }
        }
      } else {
        this.setState({ errorMessage: 'Email is invailed' });
      }
    }
  }

  onSubmit() {
    const { email, password, errorMessage } = this.state;
    const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
    const xmlRequest = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><Login xmlns="http://tempuri.org/">' +
      '<UserName>' + email + '</UserName>' +
      '<Password>' + password + '</Password>' +
      // '<IP>209.95.60.92</IP>' +
      // '<Language>EN</Language>' +
      '</Login></Body></Envelope>'

    fetch(configs.generalURL, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YWRtaW53ZWJzaXRlOk5mbjM5Zm5BQWQyMw==',
        'Content-Type': 'text/xml',
      },
      body: xmlHeader + xmlRequest,
    }).then((response) => response.text())
      .then((responseText) => {
        const responseJson = JSON.parse(responseText.split('<return xsi:type="xsd:string">')[1].split('</return>')[0]);
        const ResultCode = responseJson.ResultCode;
        if(ResultCode == -1){
          alert(responseJson.ResultMessage);
        }
        else if(ResultCode == -2){
          alert("Description of database error");
        }
        else if(ResultCode > 0){          
          AsyncStorage.setItem('LOGGED', "true");
          this.props.navigation.navigate('Screen');
        }
      }).catch((error) => {
        return
      });

  }

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.top}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Logo}
              style={styles.logoImage}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: 30, color: Color.color6 }}>Start</Text>
              <Text style={{ fontSize: 30, color: Color.color7 }}>A</Text>
              <Text style={{ fontSize: 30, color: Color.color6 }}>Job</Text>
            </View>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: "#02245D", fontSize: 17, fontWeight: 'bold' }}>Please enter your login credentials</Text>
          </View>
          <KeyboardAvoidingView>
            <TextInput
              placeholder={'Your email address'}
              placeholderTextColor="#121212"
              value={email}
              returnKeyType={"next"}
              keyboardType='email-address'
              autoCapitalize='none'
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              placeholder={'Your password'}
              placeholderTextColor="#121212"
              value={password}
              secureTextEntry={true}
              autoCapitalize='none'
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
            />
            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}

            <View style={{ marginTop: 10 }}>
              <CutomButton
                style={{
                  borderRadius: 4,
                }}
                onPress={() => this.onLogin()}
                logo={LoginIcon}
                fontWidth={'100'}
                fontSize={17}
                backgroundColor={Color.primary}
                title={'Login'} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => this.onForgotPassword()}
                    style={{ justifyContent: 'center' }}>
                    <Text style={{
                      textDecorationLine: 'underline',
                      color: '#02245D'
                    }}>Forgot your password?</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginHorizontal: 5,
                    flexDirection: 'row',
                    alignItems:
                      'center'
                  }}
                >
                  <Text
                    style={{
                      color: Color.color4,
                      textDecorationLine: 'underline'
                    }}
                  >|</Text></View>
                <View
                  style={{
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      marginRight: 5,
                      color: Color.color4
                    }}>Login via</Text>
                  {/* Facebook login button */}
                  <TouchableOpacity
                    onPress={this.onPressAlert}
                  >
                    <Image source={FacebookIcon} style={{ height: 32, width: 32 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View
            style={styles.signinContainer}>
            <View>
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    marginRight: 5,
                    color: Color.color4
                  }}>New Here?</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={SignIn} style={{ height: 14, width: 14, marginHorizontal: 5 }} />
                  <TouchableOpacity
                    style={{ justifyContent: 'center' }}
                    onPress={() => Linking.openURL('https://www.startajob.com/signin?t=1&vt=0')}>
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: Color.primary,
                        fontSize: 17,
                        fontWeight: 'bold'
                      }}>Create an Account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>)
  }
}

// Props Types
Login.propTypes = {

}

// Default Props
Login.defaultProps = {
  title: 'No name'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middle: {
    flex: 3,
    paddingHorizontal: 15
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    height: 84,
    width: 84
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#E3E3E3',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 13,
    color: '#121212',
    marginBottom: 10,
    backgroundColor: '#E3E3E3'
  },
  signinContainer: {
    marginTop: Dimensions.get("window").height > 600 ? 40 : 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login