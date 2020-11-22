import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ThemeColor } from '../theme/themeColor';

const Navbar = ({ title, stopPlayer, siderBar }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={siderBar}
    >
      <FontAwesomeIcon icon={faBars} style={styles.icon} size={20} />
    </TouchableOpacity>
    <Text style={styles.text}>{title}</Text>
    <TouchableOpacity
      style={styles.iconExit}
      onPress={stopPlayer}
    >
      <FontAwesomeIcon icon={faTimes} style={styles.icon} size={24} />
    </TouchableOpacity>
  </View>
);

Navbar.defaultProps = {
  title: '',
  stopPlayer: () => { }
};

Navbar.propTypes = {
  title: PropTypes.string,
  stopPlayer: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: ThemeColor.navbarColor,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20
  },
  text: {
    color: ThemeColor.mainFont,
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  icon: {
    color: ThemeColor.mainFont,
    marginRight: 22,
  },
  iconExit: {
    color: ThemeColor.mainFont,
    position: 'absolute',
    right: 0
  }
});

export default Navbar;