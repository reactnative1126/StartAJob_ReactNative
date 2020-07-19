import { Dimensions, Platform, PixelRatio } from 'react-native';

export const Color = {
  primary: "#02245D",
  color2: "#101010",
  color3: "#E8ECEF",
  color4: "#A4A4A4",
  color5: "#EEEEEE",
  color6: "#3D3D3D",
  color7: "#315FAD",
  color8: "#FF9900"
}



const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}