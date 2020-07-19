import React,{ Fragment } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform, 
  Animated,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PropTypes from 'prop-types';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

// Config
import { Color } from './../../global'

// Icon
import ThreeVerticalDots from './../../../assets/three-vertical-dots.png'

/**
 * Header Component
 *
 * @version 1.0.0
 * @author [Ashwani Arya](https://github.com/ashwaniarya)
 */
class Header extends React.Component {
  _menu = null;
  state = {
    position: 0
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

  renderMenuItems = () => {
    return this.props.contextMenu.map(( item, index )=>{
      return <Fragment key={ index }>
        <MenuItem onPress={() =>{ 
            this.hideMenu()
            item.onPress()
          }}>{ item.text }</MenuItem>
        <MenuDivider />
      </Fragment> 
    })
  }

  render() {
    console.log("======================")
    let changeSearch 
    changeSearch = this.props.clampedScroll && this.props.clampedScroll.interpolate({
      inputRange: [ 0, 112 ],
      outputRange: [ 0, -112],
      extrapolate: 'clamp'
    })

    let changeTop = this.props.clampedScroll && this.props.clampedScroll.interpolate({
      inputRange: [ 56 , 80 ],
      outputRange: [ 1, 0],
      extrapolate: 'clamp'
    })
    let fadeInOut = this.props.clampedScroll && this.props.clampedScroll.interpolate({
      inputRange: [ 60, 80 ],
      outputRange: [ 0, 1 ],
      extrapolate: 'clamp'
    })
    if( this.props.type === "custom"){
      return<Fragment>
        <View
          style={{
            backgroundColor: Color.primary,
            height: getStatusBarHeight(),
            width: '100%',
            zIndex: 500,
            top: 0
          }}
        >
        </View>
        { this.props.children }
      </Fragment>
    }
    else
    return(<Fragment>
        <View
          style={{
            position: 'absolute',
            backgroundColor: Color.primary,
            height: getStatusBarHeight(),
            width: '100%',
            zIndex: 500,
            top: 0
          }}
        >
        </View>
        <Animated.View 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: 56, 
            top: getStatusBarHeight(),
            zIndex: 110, 
            backgroundColor: Color.primary,
            alignItems:'center',
            justifyContent: 'center'
          }}>
            <Animated.Text style={[{ color: '#FFF', fontSize: 20, fontWeight: 'bold' },
              { 
                opacity: fadeInOut
              }
            ]}>{ this.props.mainText }</Animated.Text>
          </Animated.View>
        <Animated.View  
          style={[{ 
              alignItems: "center", 
              height: 56 , 
              position: 'absolute',
              paddingHorizontal: 15,
              width: '100%',
              zIndex: 150,
              justifyContent: 'space-between',
              flexDirection: 'row',
              top: getStatusBarHeight()
            },
          ]}>
          
          <Animated.Text style={[{ color: '#FFF', fontSize: 30, fontWeight: 'bold' },
            { 
              opacity: changeTop
            }
          ]}>{ this.props.mainText }</Animated.Text>
          {this.props.contextMenu && <View
            style={{
              position: "absolute",
              right: 10
            }}
          ><Menu
              ref={this.setMenuRef}
              button={<TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  zIndex: 150
                }}
                onPress={this.showMenu}
              >
                <Image 
                  style={{
                    width: 4,
                    height: 16
                  }}
                  source={ThreeVerticalDots}/>
              </TouchableOpacity>}
            >
              { this.renderMenuItems() }
            </Menu></View>}
        </Animated.View >
        <Animated.View 
          style={[ 
            styles.searchContainer,
            { 
              position: 'absolute',
              marginTop: 56,
              top: getStatusBarHeight(),
              backgroundColor: Color.primary,
              zIndex: 90,
              width: '100%',
            },
            { 
              transform: [
                { translateY: changeSearch },
              ],
            }
          ]}>
          { this.props.bottomComponent }
        </Animated.View>
    </Fragment>
    )
  }
}

// Default props
Header.defaultProps = {
  type : null,
  style : null,
  mainText: '',
  bottomComponent: null,
  contextMenu: null
}

// Props types
Header.propTypes = {
  // Style config
  style : PropTypes.object,
  /*
    type to custom component 
    takes 'custom' or null
  */
  type: PropTypes.oneOf([ 'custom', null ]),
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    justifyContent: 'center',
    backgroundColor :'#fff'
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
  },
  searchContainer : {
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA'
  }
})


export default Header