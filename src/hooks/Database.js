import React, { useEffect } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';

const Database = () => {
  const db = openDatabase({ name: 'SQLite.db' });

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
              'CREATE TABLE IF NOT EXISTS table_playlist(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  const insertQuery = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO table_playlist (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  };
  
  const deleteQuery = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  };

  const viewAll = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          const temp = [];
          for (let i = 0; i < results.rows.length; ++i) { temp.push(results.rows.item(i)); }
          // setFlatListItems(temp);
        }
      );
    });
  };

  return {

  };
};

export default Database;
