/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../components/loader';

/** Redux */
import { CountActions } from '../redux/actions';

const styles = StyleSheet.create({
  childStyle: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: '0%',
    right: '0%',
    paddingLeft: '0%',
    paddingRight: '0%',
    top: '0%',
    bottom: '0%',
  },
});

class BaseScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loader, showLoader = false } = this.props;
    return (
      <>
        <View style={styles.childStyle}>{this.props.children}</View>
        <Loading loading={loader || showLoader} />
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseScreen);
