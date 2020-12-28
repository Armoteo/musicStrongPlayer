import { openDatabase } from 'react-native-sqlite-storage';

const SQLiteDB = () => {
  const db = openDatabase({ name: 'SQLite.db' });

  db.transaction(function(txn) {
    txn.executeSql(
      query,  //Query to execute as prepared statement
      argsToBePassed[],  //Argument to pass for the prepared statement
      function(tx, res) {}  //Callback function to handle the result
    );
  });
  
  return {};
};
