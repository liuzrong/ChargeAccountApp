import {Injectable} from "@angular/core";
import {HttpService} from "./http-service";
import {DatePipe} from "@angular/common";
import {Bill} from "../domain/Bill";


@Injectable()
export class BillService{
  constructor(private httpService :HttpService,private datePipe :DatePipe){}

  public saveBill(bill:Bill){
    return this.httpService.httpPostNoAuth(`bill/add`,bill);
  }
}
