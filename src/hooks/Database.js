import { useEffect } from 'react';
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
              'CREATE TABLE IF NOT EXISTS table_playlist(_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), number INT(10))',
              []
            );
          }
        }
      );
    });
  }, []);

  const insertQuery = (name, number) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO table_playlist (name, number) VALUES (?,?,?)',
        [name, number],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  };
  
  const deleteQuery = (_id) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_playlist where _id=?',
        [_id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  };

  const viewAll = () => {
    const temp = [];
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_playlist',
        [],
        (tx, results) => {
          // const temp = [];
          for (let i = 0; i < results.rows.length; ++i) { temp.push(results.rows.item(i)); }
          // setFlatListItems(temp);
        }
      );
    });
    return temp;
  };

  return {
    viewAll, insertQuery, deleteQuery
  };
};

export default Database;
