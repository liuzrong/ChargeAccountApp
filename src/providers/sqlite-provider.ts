import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {Injectable} from "@angular/core";



@Injectable()
export class SqLiteProvider{

  constructor(private sqLite:SQLite){
  }

  /**
   * 初始化数据库
   * @returns {Promise<void | SQLiteObject>}
   */
  initDatBase():Promise<void | SQLiteObject>{

    return this.sqLite.create({
      name: 'myApp.db',
      location: 'default'
    }).then((sqLObject: SQLiteObject) => {
      console.log("initDataBase");
      return sqLObject;
    }).catch(e=>console.log(e))
  }






}
