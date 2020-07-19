import React, { Component } from 'react'
import { 
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import CutomButton from './../../components/Button'
import Search from './../../components/Search'
import ItemContainer from './../../components/ItemContainer'
import BagLogo from './../../../assets/baglogo.png'
import IonMenu from './../../../assets/ion-menu.png'
import Avatar from './../../../assets/avatar.png'
import DownArrow from './../../../assets/arrow-down.png'
import Background from './../../../assets/background.png'
import Chat from './../../components/ChatComponents/Chat'




const items = [
  {
    name:"Kendall Jackson Vintner's Reserve Chardonnay",
    discount: null,
    quantity: 1,
    amount: '349.38',
    url: null
  },
  {
    name:"Kendall Jackson Vintner's Reserve Chardonnay Luxury Wine",
    discount: null,
    quantity: 2,
    amount: '2035.67',
    url: null
  },
  {
    name:"Kendall Chardonnay",
    discount: null,
    quantity: 1,
    amount: '349.38',
    url: null
  },
  {
    name:"Kendall Jackson Vintner's Reserve Chardonnay ",
    discount: null,
    quantity: 1,
    amount: '5349.38',
    url: null
  },
  {
    name:"Jackson Luxury Wine",
    discount: 10,
    quantity: 2,
    amount: '439.98',
    url: null
  }
]
class Page extends Component {
  static navigationOptions = {
    headerRight: () =><View style={{ marginRight: 15 }}><TouchableOpacity 
          style={[{
            backgroundColor: '#white',
            paddingVertical: 2,
            paddingHorizontal: 2,
            borderRadius: 4,
            alignItems: "center"
          }]}>
          <View style={{ flexDirection: 'row' }}>
            <View><Image source={IonMenu}/></View>
          </View>
        </TouchableOpacity></View>,
    headerLeft: () =><View style={{ marginLeft: 15 }}><TouchableOpacity 
          style={[{
            backgroundColor: '#151515',
            paddingVertical: 2,
            paddingHorizontal: 2,
            borderRadius: 4,
            alignItems: "center"
          }, Platform.OS === 'ios'?{ }:{ elevation: 5 }]}>
          <View style={{ flexDirection: 'row' }}>
            <View><Image source={IonMenu}/></View>
          </View>
        </TouchableOpacity></View>,
    headerTitle: () => (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TouchableOpacity onPress={()=>alert('This is button')} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ paddingHorizontal: 5 }}><Image source={Avatar} style={{ borderRadius: 50 }}/></View>
          <View style={{ paddingHorizontal: 5 }}><Text style={{ fontSize: 14, fontWeight: 'bold' }}>Johnissimus Van-Doe</Text></View>
          <View style={{ paddingHorizontal: 5 }}><Image source={DownArrow}/></View>
        </TouchableOpacity>
      </View>
    ),
    
  };
  render(){
    return(<ScrollView style={{ backgroundColor:"#F5F5F5"}}>
      <Image source={Background} style={{ position: 'absolute'}}/>
      {/* Buttons Container */}
      <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
        <CutomButton 
            onPress={ ()=> {
              this.props.navigation.navigate('PageStack')
            }}
            logo={BagLogo}
            backgroundColor= "#28A745"
            title={'Club Member'}/>
        <Search />
      </View>
      {/* List Container */}
      <View style={{ paddingHorizontal: 15 }}>
        <ItemContainer items={items}/>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Chat/>
      </View>
      {/* Checkout Container */}
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 15 }}>
        <View >
          <CutomButton 
            style={{
              flex: 1,
              borderRadius: 4,
            }}
            fontColor="#151515"
            onPress={ ()=> {
              this.props.navigation.navigate('PageStack')
            }}
            title={'New Order'}/>
          <CutomButton 
            style={{
              flex: 1,
              borderRadius: 4,
            }}
            fontColor="rgba(0, 0, 0, 0.6)"
            fontWidth = "200"

            onPress={ ()=> {
              this.props.navigation.navigate('PageStack')
            }}
            title={'Cancel Order'}/>
        </View>
        <View style={{ flex: 1, marginLeft:5 }}>
          <CutomButton
            style={{
              flex: 1,
              borderRadius: 4
            }} 
            onPress={ ()=> {
              this.props.navigation.navigate('PageStack')
            }}
            backgroundColor= "#002A5C"
            title={'Checkout'}/>
        </View>
      </View>

    </ScrollView>)
  }
}

export default Page