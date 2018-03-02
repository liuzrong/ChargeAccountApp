import { WealthPage } from './../wealth/wealth-page';
import {Component} from '@angular/core';
import {MinePage} from "../mine/mine-page";
import {AddBillPage} from "../bill/add-bill/add-bill-page";

@Component({
  templateUrl:'tab-page.html'
})

export class TabsPage{
  tab1Root = AddBillPage;
  tab2Root = WealthPage;
  tab3Root = MinePage;

}
