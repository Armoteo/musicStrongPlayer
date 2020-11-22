import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeColor } from '../theme/themeColor';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

const PanelRadio = () => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.5}
    >
      <FontAwesomeIcon icon={faBroadcastTower} style={styles.icon} size={30} />
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.5}
    >
      <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} size={30} />
    </TouchableOpacity>
  </View>
);

PanelRadio.defaultProps = {

};

PanelRadio.propTypes = {

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.backgroundMainColor,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomColor: ThemeColor.mainColor,
    borderBottomWidth: 2,
  },
  icon: {
    marginLeft: 40,
    color: ThemeColor.songFont
  }
});

export default PanelRadio;