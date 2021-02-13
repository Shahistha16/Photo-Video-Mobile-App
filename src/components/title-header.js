import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../resource/colors';
import { StyleConstants } from '../resource/style-constants';
import { Images } from '../resource/images/images';
import { ScaleUtility } from '../utils';

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: StyleConstants.ROW,
    padding: ScaleUtility.moderateScale(16),
    borderBottomWidth: ScaleUtility.moderateScale(2),
    backgroundColor: '#212121',
    height: ScaleUtility.verticalScale(50),
  },
  headerText: {
    fontSize: ScaleUtility.verticalScale(18),
    fontWeight: StyleConstants.FONT_BOLD,
    color: '#FFFFFF',
    marginLeft: ScaleUtility.scale(30),
  },
});

export default function TitleHeader(props) {
  const { title } = props;

  return (
    <View style={styles.containerHeader}>
       <Image source={Images.backButton} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

TitleHeader.propTypes = {
  title: PropTypes.string,
};

TitleHeader.defaultProps = {
  title: 'TITLE',
};