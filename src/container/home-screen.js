/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BaseScreen} from '.';
import {
  Header,
  ListComponent,
  TitleComponent,
  TopCardList,
} from '../components';
import {TabView, TabBar, SceneRendererProps} from 'react-native-tab-view';

// import Loading from '../components/loader';

import {CountActions} from '../redux/actions';
import {Colors, Strings, StyleConstants} from '../resource';
import {RouteName} from '../router/router-constants';
import {NewsService} from '../services';
import {ScaleUtility} from '../utils';
import Favorites from './favorites';
import Photos from './photos';
import Videos from './videos';

const initialLayout = {width: Dimensions.get('window').width};

const styles = StyleSheet.create({
  body: {
    padding: ScaleUtility.scale(15),
    backgroundColor: '#ffffff',
    height: ScaleUtility.scalePerctFullHeight(100),
  },
  retryButton: {
    backgroundColor: Colors.PRIMARY_BLACK,
    flex: 1,
    height: ScaleUtility.verticalScale(50),
    marginTop: ScaleUtility.scalePerctFullHeight(30),
    alignSelf: StyleConstants.CENTER,
    width: ScaleUtility.horizontalScale(100),
    alignItems: StyleConstants.CENTER,
    justifyContent: StyleConstants.CENTER,
  },
  label: {
    marginHorizontal: 0,
    fontSize: ScaleUtility.moderateScale(16),
    fontWeight: 'bold',
    backgroundColor: Colors.COLOR_WHITE,
  },
  tabbar: {
    backgroundColor: Colors.COLOR_WHITE,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    // marginTop: ScaleUtility.moderateScale(5),
  },
  icon: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: ScaleUtility.moderateScale(4),
    height: ScaleUtility.moderateScale(3),
    width: ScaleUtility.moderateScale(50),
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNewsData: null,
      popularNewsData: [],
      showloader: false,
      pageSize: 10,
      pageNumber: 1,
      alertShown: false,
      showEmptyView: false,
      index: 0,
      routes: [
        {key: 'photos', title: 'Photos'},
        {key: 'videos', title: 'Videos'},
        {key: 'favorites', title: 'Favorites'},
      ],
    };
  }

  componentDidMount = () => {};

  renderScene = ({route}) => {
    switch (route.key) {
      case 'photos':
        return <Photos {...this.props} />;
      case 'videos':
        return <Videos {...this.props} />;
      case 'favorites':
        return <Photos {...this.props} />;
      default:
        return null;
    }
  };

  renderTabBar = (props: SceneRendererProps & {navigationState: State}) => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <View>
          <Text style={[styles.label, {color}]}>{route.title}</Text>
          <View
            style={[
              styles.icon,
              {
                backgroundColor: focused ? 'red' : 'white',
              },
            ]}
          />
        </View>
      )}
      indicatorStyle={{backgroundColor: Colors.COLOR_WHITE}}
      activeColor={Colors.COLOR_E81244}
      inactiveColor={Colors.COLOR_230735}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  setIndex = (index) => {
    this.setState({
      index: index,
    });
  };

  renderTitle = (title) => {
    return <TitleComponent title={title} />;
  };

  renderCard = () => {
    return <View />;
  };

  onPressCard = (item) => {};

  onEndReached = () => {};

  renderHeader = () => {
    return <Header onPressSearch={() => console.log('Search Pressing')} />;
  };

  render() {
    const {index, routes} = this.state;
    return (
      <BaseScreen>
        <ScrollView>
          {this.renderHeader()}
          <TabView
            navigationState={{index, routes}}
            renderScene={this.renderScene}
            swipeEnabled={true}
            onIndexChange={(index) => {
              this.setIndex(index);
            }}
            initialLayout={initialLayout}
            renderTabBar={this.renderTabBar}
          />
        </ScrollView>
      </BaseScreen>
    );
  }
}

/** Redux initialisation */
const mapStateToProps = (state) => ({
  loader: state.loader,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CountActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
