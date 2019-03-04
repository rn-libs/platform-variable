import { Platform } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'


export const platformVariable = (android, ios, iosx = ios) => {
  if (Platform.OS === 'android') {
    return android
  }

  if (isIphoneX()) {
    return iosx
  }

  return ios
}
