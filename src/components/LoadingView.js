import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

export default function LoadingView({indicatorColor, indicatorStyle}) {
  return (
    <View style={styles.container}>
      <View style={styles.bgView} />
      <View style={styles.indicatorView}>
        <SkypeIndicator
          style={[styles.indicatorStyle, indicatorStyle]}
          color={indicatorColor || '#ffffff'}
          size={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgView: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.6,
  },
  indicatorView: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorStyle: {
    width: 30,
    height: 30,
  },
});
