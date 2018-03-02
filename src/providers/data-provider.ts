import {SQLite, SQLiteObject} from "@ionic-native/sqlite";


export class DataProvider{

  sqLiteObject: SQLiteObject;
  constructor(private sqLite:SQLite){
    this.initDatabase();
  }


  initDatabase(){
    this.sqLite.create({
      name: 'myApp.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100));', {})
              .then(() => console.log('init database successfully'))
              .catch(e => console.log(e));
      this.sqLiteObject = database;
    })
  }






}
