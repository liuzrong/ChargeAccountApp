import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {SaveBillPage} from "../save-bill/save-bill-page";
import {BillProvider} from "../../../providers/bill-provider";


@Component({
  selector:'add-bill-page',
  templateUrl:'add-bill-page.html',
})

export class AddBillPage {

  constructor(public navCtrl: NavController,private billProvider: BillProvider){}

  addBill() {
    this.billProvider.queryAll();
    //this.billProvider.insert();
    this.navCtrl.push(SaveBillPage);

  }




}


