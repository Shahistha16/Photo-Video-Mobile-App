import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, Images, StyleConstants} from '../resource';
import {ScaleUtility} from '../utils';

export default class PhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
  }
  render() {
    const {data, navigation} = this.props;
    let img = data && data.url;
    console.log('navigation', navigation);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PhotoDetailsScreen', {data: data});
        }}
        style={styles.container}>
        <ImageBackground source={img} style={styles.image}>
          <TouchableOpacity
            style={{
              alignItems: StyleConstants.FLEX_END,
              justifyContent: StyleConstants.FLEX_END,
              paddingTop: ScaleUtility.verticalScale(20),
              paddingRight: ScaleUtility.horizontalScale(20),
            }}>
            <Image source={Images.fav} style={styles.iconStyle} />
          </TouchableOpacity>
          <View style={styles.profileView}>
            <ImageBackground style={styles.backGroundImage}></ImageBackground>
            <Text style={styles.text}>{data.photographer}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ScaleUtility.horizontalScale(10),
    flex: 1,
    marginBottom: ScaleUtility.verticalScale(5),
  },
  image: {
    height: ScaleUtility.verticalScale(200),
    width: ScaleUtility.horizontalScale(360),
    backgroundColor: 'grey',
  },
  backGroundImage: {
    height: 49,
    width: 49,
    borderRadius: 60,
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: 8,
  },
  profileView: {
    flexDirection: StyleConstants.ROW,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: ScaleUtility.verticalScale(80),
    paddingLeft: ScaleUtility.horizontalScale(10),
  },
  text: {
    marginBottom: ScaleUtility.verticalScale(30),
    paddingLeft: ScaleUtility.horizontalScale(10),
    color: Colors.COLOR_WHITE,
    fontSize: ScaleUtility.moderateScale(14),
  },
});
