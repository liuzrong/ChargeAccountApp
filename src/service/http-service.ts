import {Injectable} from "@angular/core";
import {LoadingController, ToastController} from "ionic-angular";
import {StorageService} from "./storage-service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RestEntity} from "../domain/RestEntity";
import {Observable} from "rxjs/Observable";
import {Dialogs} from "@ionic-native/dialogs";



@Injectable()
export class HttpService {

  hostUrl: string = "http://127.0.0.1:9971";
  TIME_OUT: number = 30000;
  restEntity:RestEntity;


  constructor(private http: HttpClient,
              public loadingCtrl: LoadingController,
              public storageService: StorageService,
              public toastCtrl: ToastController,
              public dialogs: Dialogs,
              ) {

  }

  public httpPostNoAuth(url: string, body: any){
    url = `${this.hostUrl}/${url}`;


    return this.http.post(url,body,httpOptions).toPromise()
      .then(res => {
        return new RestEntity(res['code'],res['msg']);
      })
      .catch(err => {
        this.handleError(err);
      });


  }

  private handleError(error: Response) {
    this.alert("提示",error.toString());
    return Observable.throw(error.json() || 'Server Error');
  }

  public alert(msg:string,title?:string) {
    if(title==null) title='提示';
    this.dialogs.alert(msg,title);
  }


}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
