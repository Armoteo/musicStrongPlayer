import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View
} from 'react-native';
import { ThemeColor } from '../theme/themeColor';
import ItemMenuDrawer from './ItemMenuDrawer';

const ContainerItem = ({
  header, itemFirst, itemSecond, firstItemClick, secondItemClick 
}) => (
  <View style={styles.menuContainer}>
    <Text style={styles.headerSection}>{header}</Text>
    <ItemMenuDrawer
      text={itemFirst}
      clickMenu={firstItemClick}
    />
    <ItemMenuDrawer
      text={itemSecond}
      clickMenu={secondItemClick}
    />
  </View>
);

ContainerItem.defaultProps = {
  header: '',
  itemFirst: '',
  itemSecond: '',
  firstItemClick: () => { },
  secondItemClick: () => { }
};

ContainerItem.propTypes = {
  header: PropTypes.string,
  itemFirst: PropTypes.string,
  itemSecond: PropTypes.string,
  firstItemClick: PropTypes.func,
  secondItemClick: PropTypes.func
};

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: ThemeColor.backGroundBorder,
    borderBottomWidth: 2
  },
  headerSection: {
    color: ThemeColor.mainFont,
    fontSize: 20,
    paddingHorizontal: 10
  },
});

export default ContainerItem;
