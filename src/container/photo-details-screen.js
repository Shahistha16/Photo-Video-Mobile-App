import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Colors, Images, StyleConstants} from '../resource';
import {ScaleUtility} from '../utils';
import {TitleHeader} from '../components/title-header';

export default class PhotoDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Hello',
      isFavourite: false,
      data: props.navigation.getParam('data'),
      // data: props.route.param.item,
    };
  }
  componentDidMount() {}
  renderHeader() {
    // return <TitleHeader title={'hello'} onPressItem={() => {}} />;
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Image source={Images.backButton} style={{tintColor: 'white'}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'hello'}</Text>
      </View>
    );
  }

  addToFavourites = () => {
    const isSlected = this.state.isFavourite;
    if (isSlected) {
      this.setState({isFavourite: false});
    } else {
      this.setState({isFavourite: true});
    }
  };

  render() {
    const isFavouriteClicked = this.state.isFavourite
      ? Images.favouriteIcon
      : Images.favouriteDeselect;
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        <ImageBackground
          resizeMode="contain"
          source={Images.headerLogo}
          style={styles.imageStyles}>
          <View style={styles.ownerDetailsContainer}>
            <View
              style={{
                flex: 0.85,
                flexDirection: 'row',
                margin: ScaleUtility.verticalScale(20),
              }}>
              <Image
                resizeMode="cover"
                style={styles.ownerImageStyles}
                source={Images.unFav}></Image>
              <Text style={styles.ownerTextStyles}>
                {' '}
                {this.state.data.photographer}
              </Text>
            </View>
            <View style={{flex: 0.15, margin: ScaleUtility.verticalScale(20)}}>
              <TouchableOpacity
                onPress={() => {
                  this.addToFavourites();
                }}>
                <Image
                  resizeMode="cover"
                  style={styles.imageFavStyles}
                  source={Images.fav}
                  tintColor={Colors.COLOR_WHITE}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: StyleConstants.ROW,
    padding: ScaleUtility.moderateScale(16),
    borderBottomWidth: ScaleUtility.moderateScale(2),
    backgroundColor: '#212121',
    height: ScaleUtility.verticalScale(50),
  },
  imageStyles: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'grey',
  },
  headerText: {
    fontSize: ScaleUtility.verticalScale(18),
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: ScaleUtility.scale(30),
  },
  ownerDetailsContainer: {
    flexDirection: StyleConstants.ROW,
    justifyContent: StyleConstants.SPACE_BETWEEN,
  },
  ownerImageStyles: {
    width: ScaleUtility.verticalScale(36),
    height: ScaleUtility.verticalScale(36),
    borderRadius: ScaleUtility.verticalScale(18),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
  },
  ownerTextStyles: {
    padding: ScaleUtility.verticalScale(10),
    color: '#FFFFFF',
  },
  imageFavStyles: {
    width: ScaleUtility.verticalScale(36),
    height: ScaleUtility.verticalScale(36),
  },
  containerHeader: {
    flexDirection: StyleConstants.ROW,
    padding: ScaleUtility.moderateScale(16),
    borderBottomWidth: ScaleUtility.moderateScale(2),
    backgroundColor: '#212121',
    // height: ScaleUtility.verticalScale(50),
  },
  headerText: {
    fontSize: ScaleUtility.verticalScale(18),
    fontWeight: StyleConstants.FONT_BOLD,
    color: '#FFFFFF',
    marginLeft: ScaleUtility.scale(30),
  },
});
