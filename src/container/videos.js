import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {photoVideoService} from '../services';
import {CountActions} from '../redux/actions';
import {Constants} from '../resource';
import Loading from '../components/loader';
import VideoCard from '../components/video-card';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoData: [],
      showloader: false,
      pageSize: 10,
      pageNumber: 1,
      alertShown: false,
      showEmptyView: false,
    };
  }

  rederPhotoData = () => {
    const {pageSize, pageNumber} = this.state;
    photoVideoService.getPhotosList(
      pageSize,
      pageNumber,
      this.onSuccessGetPhoto,
      this.onFailureGetPhoto,
    );
  };

  onSuccessGetPhoto = (response, key) => {
    const {photoData, pageNumber} = this.state;
    this.props.actions.setLoader(false);
    const photo = response && response.data.photos;
    console.log('photo---', photo);
    this.setState({showLoader: false});
    const updatedData = [...photoData, ...photo];
    this.setState({
      photoData: updatedData,
      pageNumber: pageNumber + 1,
      showEmptyView: false,
    });
  };
  onFailureGetPhoto = (error) => {
    console.log('err', error);
  };

  componentDidMount() {
    this.rederPhotoData();
  }

  onEndReached = () => {
    this.rederPhotoData();
  };

  renderItemCard = ({item, index}) => {
    return (
      <View>
        <VideoCard data={item} navigation={this.props.navigation} />
      </View>
    );
  };

  renderLists = () => {
    const {photoData, showLoader} = this.state;
    return (
      <View>
        <FlatList
          data={photoData}
          renderItem={this.renderItemCard}
          onEndReached={this.onEndReached}
          key={Math.random()}
          ListFooterComponent={() => {
            return <Loading loading={showLoader} />;
          }}
        />
      </View>
    );
  };

  render() {
    return <View>{this.renderLists()}</View>;
  }
}

const mapStateToProps = (state) => ({
  loader: state.loader,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CountActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
