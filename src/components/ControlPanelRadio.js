import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { ThemeColor } from '../theme/themeColor';
import AppButton from './UI/AppButton';

const ControlPanelRadio = ({ start, stop }) => (
  <View style={styles.container}>
    <AppButton
      onPress={start}
      textTransform="uppercase"
    >
      Play
    </AppButton>
    <AppButton
      onPress={stop}
      textTransform="uppercase"
    >
      Stop
    </AppButton>
  </View>
);

ControlPanelRadio.defaultProps = {
  start: () => { },
  stop: () => { }
};

ControlPanelRadio.propTypes = {
  start: PropTypes.func,
  stop: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopColor: ThemeColor.mainColor,
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  button: {
    width: 100
  }
});

export default ControlPanelRadio;
