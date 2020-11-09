import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { ThemeColor } from '../theme/themeColor';

const ItemMenuDrawer = ({ text, clickMenu }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={clickMenu}
  >
    <Text style={styles.sectionItem}>{text}</Text>
  </TouchableOpacity>
);

ItemMenuDrawer.defaultProps = {
  text: '',
  clickMenu: () => { }
};

ItemMenuDrawer.propTypes = {
  text: PropTypes.string,
  clickMenu: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10
  },
  sectionItem: {
    color: ThemeColor.mainColor,
    fontSize: 20,
    paddingHorizontal: 10
  }
});

export default ItemMenuDrawer;