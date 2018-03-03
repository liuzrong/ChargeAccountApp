import {SQLiteObject} from "@ionic-native/sqlite";
import {SqLiteProvider} from "./sqlite-provider";
import { Injectable} from "@angular/core";


@Injectable()
export class BillProvider{

  sqLiteObject:SQLiteObject;

  constructor(private sqLiteProvider: SqLiteProvider){
  }


  /**
   * 初始化数据库
   * @returns {Promise<void | SQLiteObject>}
   */
  init(){
    return this.sqLiteProvider.initDatBase();
  }

  create(){
    this.init().then((sqLiteObject)=> {
      var sql = 'create table if not exists t_bill(id INTEGER PRIMARY KEY AUTOINCREMENT,typeid INTEGER NOT NULL,' +
        'credate VARCHAR(30),val DOUBLE NOT NULL,remark VARCHAR(100)) ';
      this.sqLiteObject = <SQLiteObject>sqLiteObject;
      this.sqLiteObject.executeSql(sql, {})
        .then(() => console.log('创建数据库成功！'))
        .catch(e => console.log(e));
    });

  }

  insert(){
    this.init().then((sqLiteObject)=> {
      var sql = "insert into t_bill values(NULL,1,'2018-03-02',10.0,'吃饭')";
      this.sqLiteObject = <SQLiteObject>sqLiteObject;
      this.sqLiteObject.executeSql(sql,{})
        .then(()=> console.log('插入成功!'))
        .catch(e=> console.log("插入失败！"));
    })


  }


  queryAll(){
    this.init().then((sqLiteObject)=> {
      var sql = 'select * from t_bill';

      this.sqLiteObject = <SQLiteObject>sqLiteObject;
      this.sqLiteObject.executeSql(sql,{})
        .then((res) => {
          console.log(res.rows.item(0).id)
          console.log(res.rows.item(1).id)

        })
        .catch(e=>console.log(e));
    })

  }



}
