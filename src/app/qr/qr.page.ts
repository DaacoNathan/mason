import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  encodeData: any;
  scannedData: {};
  currentIDPhoto: any;
  barcodeScannerOptions: BarcodeScannerOptions;
  ngOnInit() {
    this.currentIDPhoto = '/assets/img/idPhoto.png';
  }
  constructor(private barcodeScanner: BarcodeScanner,private camera: Camera) {
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

   
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    
    this.camera.getPicture(options).then((imageData1) => {
      this.currentIDPhoto = 'data:image/jpeg;base64,' + imageData1;
    }, (err) => {
    
      console.log("Camera issue:" + err);
    });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
 

  }

  
