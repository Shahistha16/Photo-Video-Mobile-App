import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const scalePerctFullHeight = (height) => (screenHeight * height) / 100;

const scalePerctFullWidth = (width) => (screenWidth * width) / 100;

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const horizontalScale = scale;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// eslint-disable-next-line import/prefer-default-export
export const ScaleUtility = {
  scale,
  verticalScale,
  moderateScale,
  horizontalScale,
  screenWidth,
  screenHeight,
  scalePerctFullHeight,
  scalePerctFullWidth,
};
