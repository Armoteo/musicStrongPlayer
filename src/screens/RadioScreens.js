import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Navbar from '../components/Navbar';
import ControlPlayer from '../hooks/ControlPlayer';
import { ThemeColor } from '../theme/themeColor';
import ControlPanelRadio from '../components/ControlPanelRadio';

const RadioScreens = ({ navigation }) => {
  const { stopPlayer } = ControlPlayer();
  const [dataView, setDataView] = useState([]);
  const db = openDatabase({ name: 'SQLite.db' });
  console.log(dataView);
  const siderBar = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_playlist'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_playlist', []);
            txn.executeSql(
              // eslint-disable-next-line max-len
              'CREATE TABLE IF NOT EXISTS table_playlist(_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), number VARCHAR(20))',
              []
            );
          }
        }
      );
    });
  }, []);

  const insertQuery = (nameE, number) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO table_playlist (name, number) VALUES (?,?)',
        [nameE, number],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  };

  const viewAll = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_playlist',
        [],
        (tx, results) => {
          const temp = [];
          for (let i = 0; i < results.rows.length; ++i) { temp.push(results.rows.item(i)); }
          console.log(temp);
          setDataView(temp);
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <Navbar title="StrongPlayer" stopPlayer={stopPlayer} siderBar={siderBar} />
      <View style={styles.radioConteiner}>
        {dataView.map((item, index) => (
          <Text style={styles.text}>
            {item.name}
          </Text>
        ))}
        
      </View>
      <ControlPanelRadio start={viewAll} stop={() => insertQuery('utr', '6788')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.backgroundMainColor,
    height: '100%',
    justifyContent: 'space-between'
  },
  radioConteiner: {
    width: '100%',
    flex: 2,
    alignItems: 'center',
    paddingVertical: 20
  },
  header: {
    width: '100%',
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  }
});

export default RadioScreens;
