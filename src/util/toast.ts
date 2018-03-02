import { ToastController } from 'ionic-angular';

export class ToastUtil {
  static presentToast(toastCtrl:ToastController, message:string) {
    let toast = toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log(`Dismissed toast - ${message}`);
    });

    toast.present();
  }
}
