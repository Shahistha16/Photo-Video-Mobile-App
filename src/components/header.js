import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Images, Strings, StyleConstants} from '../resource';
import {ScaleUtility} from '../utils';
import {PropTypes} from 'prop-types';

Header.propTypes = {
  onPressBookmark: PropTypes.func,
  onPressSearch: PropTypes.func,
};

Header.defaultProps = {
  onPressBookmark: () => {},
  onPressSearch: () => {},
};

export default function Header(props) {
  const {onPressBookmark, onPressSearch} = props;
  return (
    <View style={styles.container}>
      <ImageBackground style={{}}>
        <Image source={Images.headerLogo} style={styles.imageStyle} />
        <View>
          <Text style={styles.headerText}>{Strings.DISCOVER_VIDEO_PHOTO}</Text>
          <Text style={styles.subText}>{Strings.BEST_MEMORIES}</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInputstyle}
            onChangeText={props.onChangeText}
            placeholder={Strings.PLACEHOLDER_TEXT}
          />
          <View style={styles.searchView}>
            <Image source={Images.searchIcon} style={styles.searchIcon} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: StyleConstants.SPACE_BETWEEN,
    flexDirection: StyleConstants.ROW,
    paddingHorizontal: ScaleUtility.moderateScale(16),
    borderBottomWidth: ScaleUtility.moderateScale(2),
    borderColor: '#EEEEEE',
    backgroundColor: Colors.PRIMARY_BLACK,
    paddingTop: ScaleUtility.verticalScale(20),
    paddingBottom: ScaleUtility.verticalScale(48),
  },
  imageStyle: {
    height: ScaleUtility.verticalScale(36),
    width: ScaleUtility.horizontalScale(120),
    paddingTop: ScaleUtility.verticalScale(36),
  },
  secondSection: {
    flexDirection: StyleConstants.ROW,
    justifyContent: StyleConstants.CENTER,
    alignItems: StyleConstants.CENTER,
  },
  bookmarkIcon: {
    height: ScaleUtility.verticalScale(24),
    width: ScaleUtility.horizontalScale(20),
    resizeMode: 'contain',
  },
  searchIcon: {
    height: ScaleUtility.verticalScale(22),
    width: ScaleUtility.horizontalScale(22),
    marginLeft: ScaleUtility.horizontalScale(10),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: ScaleUtility.moderateScale(24),
    paddingTop: ScaleUtility.verticalScale(50),
    paddingHorizontal: ScaleUtility.horizontalScale(51),
    color: Colors.COLOR_WHITE,
    textAlign: StyleConstants.CENTER,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: ScaleUtility.moderateScale(14),
    paddingTop: ScaleUtility.verticalScale(5),
    paddingHorizontal: ScaleUtility.horizontalScale(51),
    color: Colors.COLOR_WHITE,
    textAlign: StyleConstants.CENTER,
  },
  textInputstyle: {
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: 5,
    paddingLeft: ScaleUtility.horizontalScale(43),
    marginTop: ScaleUtility.verticalScale(24),
  },
  searchView: {
    position: 'absolute',
    top: ScaleUtility.verticalScale(39.75),
  },
});
