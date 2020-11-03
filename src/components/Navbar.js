import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ title }) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <FontAwesomeIcon icon={faBars} style={styles.icon} size={20} />
    </TouchableOpacity>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Navbar.defaultProps = {
  title: ''
};

Navbar.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#F98E00',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20
  },
  text: {
    color: '#000000',
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  icon: {
    color: '#000000',
    marginRight: 22,
  }
});

export default Navbar;