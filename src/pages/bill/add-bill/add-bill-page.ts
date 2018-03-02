import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {SaveBillPage} from "../save-bill/save-bill-page";


@Component({
  selector:'add-bill-page',
  templateUrl:'add-bill-page.html',
})

export class AddBillPage {

  constructor(public navCtrl: NavController){

  }

  addBill() {
    this.navCtrl.push(SaveBillPage);
  }




}


