import React from 'react';
import SQLite from 'react-native-sqlite-storage';
export default class SQLiteScreen extends React.Component {
  constructor() {
    super();
    SQLite.DEBUG = true;
  }
  /**
  * Execute sql queries
  * 
  * @param sql
  * @param params
  * 
  * @returns {resolve} results
  */
  ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        resolve(results);
      },
        (error) => {
          reject(error);
        });
    });
  });
  // Create Table
  async CreateTable() {
    let Table = await this.executeQuery("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, first_name VARCHAR(16), last_name VARCHAR(16), is_deleted INTEGER)",[]);
    console.log(Table);
  }

  /**
   *  Example Of Insert Rows on SQLite
   */
  async InsertQuery() {
    // single insert query 
    let singleInsert = await this.ExecuteQuery("INSERT INTO users (id, first_name, last_name, is_deleted) VALUES ( ?, ?, ?, ?)", [1, 'Infinite', 'Ability', 0]);
    console.log(singleInsert);
    // multiple insert of users
    let Data = [{ "id": 2, "first_name": "Shani", "last_name": "Tiwari", "is_deleted": "0" }, { "id": 3, "first_name": "John", "last_name": "Carter", "is_deleted": "0" }, { "id": 4, "first_name": "captain", "last_name": "marvel", "is_deleted": "0" }];
    let query = "INSERT INTO users (id, first_name, last_name, is_deleted) VALUES";
    for (let i = 0; i < Data.length; ++i) {
      query = query + "('"
        + Data[i].id //id
        + "','"
        + Data[i].first_name //first_name
        + "','"
        + Data[i].last_name //last_name
        + "','"
        + Data[i].is_deleted //is_deleted
        + "')";
      if (i != Data.length - 1) {
        query = query + ",";
      }
    }
    query = query + ";";
    console.log(query);
    let multipleInsert = await this.ExecuteQuery(query, []);
    console.log(multipleInsert);
    // multiple insert of state table
    let countryData = [{ "id": 1, "user_id": "1", "country_name": "India", "is_deleted": "0" }, { "id": 2, "user_id": "2", "country_name": "USA", "is_deleted": "0" }, { "id": 3, "user_id": "3", "country_name": "USA", "is_deleted": "0" }, { "id": 4, "user_id": "4", "country_name": "USA", "is_deleted": "0" }];
    let countryQuery = "INSERT INTO country (id, user_id, country_name, is_deleted) VALUES";
    for (let i = 0; i < countryData.length; ++i) {
      countryQuery = countryQuery + "('"
        + countryData[i].id //id
        + "','"
        + countryData[i].user_id //user_id
        + "','"
        + countryData[i].country_name //country_name
        + "','"
        + countryData[i].is_deleted //is_deleted
        + "')";
      if (i != countryData.length - 1) {
        countryQuery = countryQuery + ",";
      }
    }
    countryQuery = countryQuery + ";";
    console.log(countryQuery);
    let countryMultipleInsert = await this.ExecuteQuery(countryQuery, []);
    console.log(countryMultipleInsert);
  }

  async UpdateQuery(){
    let updateQuery = await this.ExecuteQuery('UPDATE users SET first_name = ? , last_name = ? WHERE id = ?', ["Doctor", "Strange", 3]);
    console.log(updateQuery);
  }

  /**
   * Delete Query Example
   */
  async DeleteQuery(){
    let deleteQuery = await this.ExecuteQuery('DELETE FROM users WHERE id = ?', [4]);
    console.log(deleteQuery);
  }

  /**
   * Select Query Example
   */
  async SelectQuery(){
    let selectQuery = await this.ExecuteQuery("SELECT * FROM users",[]);
    var rows = selectQuery.rows;
    for (let i = 0; i < rows.length; i++) {
        var item = rows.item(i);
        console.log(item);
    }
  }

  
}