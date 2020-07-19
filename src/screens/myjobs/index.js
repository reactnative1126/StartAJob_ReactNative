import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Animated
} from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Local components
import Header from './../../components/Header'
import Card from './../../components/Card'
import Search from './../../components/Search'

// Icon
import ThreeVerticalDots from './../../../assets/three-vertical-dots.png'
// Config
import { Color, normalize } from '../../global'
import { TouchableOpacity } from 'react-native-gesture-handler'

/**
 * Login Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */
class MyJobs extends React.Component {
  _menu = null;
  
  constructor(props) {
    super(props)

    const scrollAnim = new Animated.Value(0)
    const offsetAnim = new Animated.Value(0)

    this.state = {
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [ 0, 1 ],
            outputRange: [ 0, 1 ],
            extrapolateLeft: 'clamp'
          }),
          offsetAnim
        ),
        0,
        112
      )
    };
  }

  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  render(){
    
    return(<View style={ styles.container }> 
      <Header 
        clampedScroll={ this.state.clampedScroll }
        bottomComponent={<Search 
          style={{
            backgroundColor: '#FFF'
          }}
        />}
        mainText = "My jobs"
        contextMenu={
          [
            { 
              text: 'Job archive',
              onPress: () =>{
                alert('Button')
              }
            },
            { 
              text: 'Log out',
              onPress: () =>{
                alert('Button')
              }
            }
          ]
        }
      />
      <Animated.ScrollView
        scrollEventThrottle={8}
        style= {{
          paddingTop: 0
        }}
        contentContainerStyle={{
          paddingTop: getStatusBarHeight()+120
        }}
        onScroll={Animated.event(
          // scrollX = e.nativeEvent.contentOffset.x
          [{ nativeEvent: {
               contentOffset: {
                 y: this.state.scrollAnim
               }
             }
           }],{
             useNativeDriver: true
           }
        )}
        >
        <Card
          onPress={()=>{
            alert('Job Card')
          }} 
          jobState="JOB_IN_PROGRESS"
          bid = {{
            acceptedPrice: 1000,
            proposedPrice: 1000,
            days: 10
          }}
          description="Hello John! I have done a couple of similar project on"
          jobTitle="Build website on WordPress using PHP"
          userName="John Doe"
          distance = '0.5 Km'
          isRead= { false }
          timestampCustom = {<Text style={{ fontSize: normalize(12), color: Color.color4 }}>Hired <Text style={{ fontWeight: 'bold' }}>21 days</Text></Text>}
          jobType= "ONE_TIME"
          context= "MY_JOBS"
          category= {'Web Design'}
          subCategories= "WordPress, HTML/CSS, CRM, JavaScript"
        />
        <Card
          onPress={()=>{
            alert('Job Card')
          }} 
          jobState="JOB_AWAIT_CONFIRMATION"
          bid = {{
            acceptedPrice: 1000,
            proposedPrice: 1000,
            days: 10
          }}
          description="Hello John! I have done a couple of similar project on"
          jobTitle="Build website on WordPress using PHP"
          userName="John Doe"
          distance = '0.5 Km'
          isRead= { false }
          timestampCustom = {<Text style={{ fontSize: normalize(12), color: Color.color4 }}>Hired <Text style={{ fontWeight: 'bold' }}>21 hrs 50 m</Text></Text>}
          jobType= "ONE_TIME"
          context= "MY_JOBS"
          category= {'Web Design'}
          subCategories= "WordPress, HTML/CSS, CRM, JavaScript"
        />
        <Card
          onPress={()=>{
            alert('Job Card')
          }} 
          jobState="BID_REJECTED"
          bid = {{
            acceptedPrice: 1000,
            proposedPrice: 1000,
            days: 0
          }}
          onPress={()=>{
            this.props.navigation.navigate('ChatScreen',{
              jobState: "BID_REJECTED",
              varified: true,
              oIcon: true
            })
          }}
          description="Hello John! I have done a couple of similar project on"
          jobTitle="Build website on WordPress using PHP"
          userName="John Doe"
          distance = '0.5 Km'
          isRead= { false }
          timestamp='2 min'
          jobType= "ONE_TIME"
          context= "MY_JOBS"
          category= {'Web Design'}
          subCategories= "WordPress, HTML/CSS, CRM, JavaScript"
        />
      </Animated.ScrollView>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  searchContainer : {
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
    zIndex: 40

  },
  shadow : Platform.OS === "ios" ? {
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

export default MyJobs