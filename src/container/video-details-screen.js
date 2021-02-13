import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {Images, StyleConstants} from '../resource';
import {ScaleUtility} from '../utils';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {TitleHeader} from '../components';

export default class VideoDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Hello',
      isFavourite: false,
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'contain',
      videoLink:
        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
    };
  }

  renderHeader() {
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

  onSeek = (seek) => {
    this.videoPlayer.seek(seek);
  };

  onPaused = (playerState) => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    this.setState({playerState: PLAYER_STATES.PLAYING});
    this.videoPlayer.seek(0);
  };

  onProgress = (data) => {
    const {isLoading, playerState} = this.state;
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({currentTime: data.currentTime});
    }
  };

  onLoad = (data) => this.setState({duration: data.duration, isLoading: false});

  onLoadStart = (data) => this.setState({isLoading: true});

  onEnd = () => this.setState({playerState: PLAYER_STATES.ENDED});

  onError = () => console.log('Oh Error! ', error);

  exitFullScreen = () => {
    console.log('Exit full screen');
  };

  enterFullScreen = () => {};

  onFullScreen = () => {
    if (this.state.screenType == 'contain')
      this.setState({screenType: 'cover'});
    else this.setState({screenType: 'contain'});
  };

  onSeeking = (currentTime) => this.setState({currentTime});

  render() {
    const isFavouriteClicked = this.state.isFavourite
      ? Images.favouriteIcon
      : Images.favouriteDeselect;
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
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
              source={Images.favouriteDeselect}></Image>
            <Text style={styles.ownerTextStyles}> Haaa</Text>
          </View>
          <View style={{flex: 0.15, margin: ScaleUtility.verticalScale(20)}}>
            <TouchableOpacity
              onPress={() => {
                this.addToFavourites();
              }}>
              <Image
                resizeMode="cover"
                style={styles.imageFavStyles}
                source={isFavouriteClicked}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <Video
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={(videoPlayer) => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{uri: this.state.videoLink}}
          style={styles.backgroundVideo}
          volume={10}
        />
        <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="#333"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
