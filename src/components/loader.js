/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native';

/** Common loader */

const styles = StyleSheet.create({
  footerEmpty: {
    padding: 10,
  },
  loader: {
    flex: 1,
    backgroundColor: '#80000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Loading(props) {
  const { loading = true } = props;

  if (loading) {
    return (
      /** Common background theme with status bar */
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      </View>
    );
  }
  return <View style={styles.footerEmpty} />;
}
