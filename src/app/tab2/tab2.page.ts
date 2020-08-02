import { Component } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  ngOnInit() {
  }
  constructor(private barcodeScanner: BarcodeScanner, public router: Router) {
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ionViewDidEnter() {

 
 }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log(JSON.stringify(barcodeData));
        let laman = JSON.parse(JSON.stringify(barcodeData));
        
        console.log(laman);
        laman = laman.text;
        console.log(laman);
        laman = JSON.parse(laman);
        console.log(laman.name);
       
          localStorage.setItem("scannedName",laman.name);
          localStorage.setItem("scannedID",laman.memberID);
          localStorage.setItem("scannedOccupation",laman.occupation);
          localStorage.setItem("scannedContact",laman.contactNo);
          
          this.router.navigateByUrl("/member-info");
        
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

}


