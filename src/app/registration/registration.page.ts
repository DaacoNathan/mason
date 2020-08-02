import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  
  regAs: any;
  currentIDPhoto: any;
  currentIDHandheld: any;
  validFirstName;validLastName;validMiddleName;validStreet;validBarangay;validUnit;validCity: boolean = false;
  providerInfo: boolean = false;
  nameAgree;streetAgree: boolean = false;
  public loginForm: FormGroup;
  constructor(private camera: Camera,public formBuilder: FormBuilder,public router: Router,public alertController: AlertController)  {

    this.loginForm = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      middlename: ['', Validators.required],
      streetname: ['', Validators.required],
      unitname: ['', Validators.required],
      barangayname: ['', Validators.required],
      cityname: ['', Validators.required]
  });
    
   }
   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please check Error!.',
      buttons: ['OK']
    });

    await alert.present();
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

  takePicture2() {
    const options2: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options2).then((imageData2) => {
      this.currentIDHandheld = 'data:image/jpeg;base64,' + imageData2;
    }, (err) => {
    
      console.log("Camera issue:" + err);
    });
  }
  


  ngOnInit() {
    this.currentIDPhoto = '/assets/img/idPhoto.png';
    this.currentIDHandheld = '/assets/img/idPhoto.png';
  }

  onRegister() {
    console.log(this.loginForm.value);
    this.checkName();
    this.checkAddress();
    if(this.nameAgree&&this.streetAgree){
      this.router.navigateByUrl('/tabs');
    }
    else{
      this.presentAlert();
    }
}
showSelectValue(regAs)
{
  if(regAs=="Provider")
  {
    console.log("Provider");
    this.providerInfo = true;
    
  }
  else{
    console.log("Seeker");
    this.providerInfo = false;
  }

}

checkName()
{
  if(!/[a-zA-Z]+$/.test(this.loginForm.value.firstname)){
    this.validFirstName = true;
    this.nameAgree = false;
   }
   if(!/[a-zA-Z]+$/.test(this.loginForm.value.lastname)){
     this.validLastName = true;
     this.nameAgree = false;
   }
   if(!/[a-zA-Z]+$/.test(this.loginForm.value.middlename)){
     this.validMiddleName = true;
     this.nameAgree = false;
   }
   if(/[a-zA-Z]+$/.test(this.loginForm.value.firstname)&&/[a-zA-Z]+$/.test(this.loginForm.value.lastname)&&/[a-zA-Z]+$/.test(this.loginForm.value.middlename)){
     this.nameAgree = true;
   }
}

checkAddress()
{
  if((/^ *$/.test(this.loginForm.value.streetname))){
    this.validStreet = true;
    this.streetAgree = false;
  }
  
  if((/^ *$/.test(this.loginForm.value.barangayname))){
    this.validBarangay = true;
    this.streetAgree = false;
  }
  if(/^ *$/.test(this.loginForm.value.unitname)){
    this.validUnit = true;
    this.streetAgree = false;
  }
  if(/^ *$/.test(this.loginForm.value.cityname))
  {
    this.validCity = true;
    this.streetAgree = false;
  }
  if(!/^ *$/.test(this.loginForm.value.streetname)&&!/^ *$/.test(this.loginForm.value.unitname)&&!/^ *$/.test(this.loginForm.value.barangayname)&&!/^ *$/.test(this.loginForm.value.cityname)){
    this.streetAgree = true;
  }
}
onClickFirstName(){
  this.validFirstName = false;
}
onClickLastName(){
  this.validLastName = false;
}
onClickMiddleName(){
  this.validMiddleName = false;
}
onClickStreet()
{
  this.validStreet= false;
}
onClickBarangay()
{
  this.validBarangay= false;
}
onClickHouseNo()
{
  this.validUnit= false;
}
onClickCity()
{
  this.validCity= false;
}


}
