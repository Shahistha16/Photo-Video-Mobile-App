import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {HomeScreen, StartUp} from '../container';
import {RouteName} from './router-constants';
import {createStackNavigator} from 'react-navigation-stack';
import PhotoDetailsScreen from '../container/photo-details-screen';
import VideoDetailsScreen from '../container/video-details-screen';

const HomeScreens = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    PhotoDetailsScreen: {screen: PhotoDetailsScreen},
    VideoDetailsScreen: {screen: VideoDetailsScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: RouteName.HOME_SCREEN,
    navigationOptions: () => ({
      header: null,
    }),
  },
);

/** Main NAviagator */
const NavContainer = createSwitchNavigator(
  {
    StartUp: {screen: StartUp},
    HomeTabs: {screen: HomeScreens},
  },
  {
    initialRouteName: RouteName.START_UP,
  },
);

export default createAppContainer(NavContainer);
