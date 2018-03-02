import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {Dictionary, DIRECTIONS} from "../../../domain/Dictionary";
import {NavController, ToastController} from "ionic-angular";
import {AddBillPage} from "../add-bill/add-bill-page";
import {ToastUtil} from "../../../util/toast";
import {BillService} from "../../../service/bill-service";


@Component({
  selector:'save-bill-page',
  templateUrl:'save-bill-page.html',
  providers: [BillService]
})


export class SaveBillPage{
  public billForm:FormGroup;
  public defaultDate:string;
  public billTypes:Dictionary[];





  constructor(private formBuilder: FormBuilder,
    private billService: BillService,
    private datePipe :DatePipe,
    private toastController: ToastController,
    private navController: NavController
  ){}


  ngOnInit(){
    var date = new Date();
    var str = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.defaultDate =str;
    this.initBillType();
    this.initForm();
  }



  initBillType(){
    this.billTypes = DIRECTIONS;
  }

  initForm(){
    this.billTypes = DIRECTIONS;
    this.billForm = this.formBuilder.group({
      id:[''],
      typeid: ['', Validators.required],
      val: ['', Validators.required],
      credate:[this.defaultDate, Validators.required],
      remark:['']
    });

  }


  logForm(value){
    if(value.typeid == '' ||　value.val == ''){

      ToastUtil.presentToast(this.toastController,"消费类型或金额不能为空！");
    }else{

      this.billService.saveBill(value).then(res=>{
        if(res['code'] =='1'){
          this.navController.push(AddBillPage);
          ToastUtil.presentToast(this.toastController,'保存成功!');
        }else{
          ToastUtil.presentToast(this.toastController,'保存失败!');
        }
      })




    }
}




}
