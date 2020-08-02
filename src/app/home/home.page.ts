import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

declare var md5;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage 

{
  username:any;
  password:any;


  
  
  constructor(
    
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    public androidFingerprintAuth: AndroidFingerprintAuth,
    public httpClient: HttpClient, 
    private http: Http
  ) 
  { 

  }
  ngOnInit() {
    
 
  }

 

  login2() {
    var link = ' http://139.99.68.162:50000/api/Login/PinVerification?MobileNo=09955836073&PinCode=1234';
    
   
    this.http.get(link)
      .subscribe((data:any) => {
        this.presentAlert();
        

});
  }
  login() {

    
    var link = 'http://139.99.68.162:1998/api/v1/customer_information/'+this.username;
    var myData = JSON.stringify({ username: this.username,password: this.password });
    console.log(myData);
    this.httpClient.get(link)
      .subscribe((data:any) => {
    console.log(data)
        if(data.data.length==0){
          console.log("Not Authenticated");
          this.presentFailed(); 
        }
        else if(data.data[0].password==md5(this.password)) {
          console.log("Authenticated");

          localStorage.setItem("fullname",data.data[0].name);
          localStorage.setItem("occupation",data.data[0].occupation)
         // localStorage.setItem("email",data.mem_email)
          localStorage.setItem("mobile_number",data.data[0].mobile)
          localStorage.setItem("id",data.data[0].id)
          console.log(localStorage.getItem("fullname"));
          this.presentAlert();
          this.router.navigate(['/tabs']);
        }
        else {
          console.log("Not Authenticated");
          this.presentFailed(); 
        }
      }, error => {
        this.presentFailed(); 
        console.log(error);
        console.log("Oooops!");
       
      });
//     let failed = true;
//     for(let ctr = 0; ctr< this.accounts.length; ctr++) {
//       if(this.username==this.accounts[ctr].user&&this.password==this.accounts[ctr].password) {
//         localStorage.setItem("Username",this.username);
//         failed = false;
//         break;
//       }
//     } if (failed) {
//       this.presentFailed(); 
//     } else {

//       this.router.navigate(['/tabs']);
      
// // this.androidFingerprintAuth.isAvailable()
// // .then((result)=> {
// //   if(result.isAvailable){
   

// //     this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
// //       .then(result => {
// //          if (result.withFingerprint) {
// //              console.log('Successfully encrypted credentials.');
// //              console.log('Encrypted credentials: ' + result.token);
             
// //       this.presentAlert();
// //       this.router.navigate(['/tabs']);
// //          } else if (result.withBackup) {
// //            console.log('Successfully authenticated with backup password!');
           
// //       this.presentAlert();
// //       this.router.navigate(['/tabs']);
// //          } else console.log('Didn\'t authenticate!');
// //       })
// //       .catch(error => {
// //          if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
// //            console.log('Fingerprint authentication cancelled');
// //          } else console.error(error)
// //       });

// //   } else {
 
// //   }
// // })
// // .catch(error => console.error(error));

//     }
  
    
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Login Success!',
       buttons: ['OK']
     });

    await alert.present();
  }

  async presentFailed() {
    const alert = await this.alertController.create({
      message: 'Login Failed',
      buttons: ['OK']
    });

   await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  ngAfterViewInit(){
    
    (function(){
      "use strict";


      /*==================================================================
      [ Focus input ]*/
      $('.input100').each(function(){
          $(this).on('blur', function(){
              if($(this).val().trim() != "") {
                  $(this).addClass('has-val');
              }
              else {
                  $(this).removeClass('has-val');
              }
          })    
      })
    
    
      /*==================================================================
      [ Validate ]*/
      // var input = $('.validate-input .input100');
  
      // $('.validate-form').on('submit',function(){
      //     var check = true;
  
      //     for(var i=0; i<input.length; i++) {
      //         if(validate(input[i]) == false){
      //             showValidate(input[i]);
      //             check=false;
      //         }
      //     }
  
      //     return check;
      // });
  
  
      // $('.validate-form .input100').each(function(){
      //     $(this).focus(function(){
      //        hideValidate(this);
      //     });
      // });
  
      // function validate (input) {
      //     if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      //         if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
      //             return false;
      //         }
      //     }
      //     else {
      //         if($(input).val().trim() == ''){
      //             return false;
      //         }
      //     }
      // }
  
      // function showValidate(input) {
      //     var thisAlert = $(input).parent();
  
      //     $(thisAlert).addClass('alert-validate');
      // }
  
      // function hideValidate(input) {
      //     var thisAlert = $(input).parent();
  
      //     $(thisAlert).removeClass('alert-validate');
      // }
      
      /*==================================================================
      [ Show pass ]*/
      var showPass = 0;
      $('.btn-show-pass').on('click', function(){
          if(showPass == 0) {
              $(this).next('input').attr('type','text');
              $(this).find('i').removeClass('zmdi-eye');
              $(this).find('i').addClass('zmdi-eye-off');
              showPass = 1;
          }
          else {
              $(this).next('input').attr('type','password');
              $(this).find('i').addClass('zmdi-eye');
              $(this).find('i').removeClass('zmdi-eye-off');
              showPass = 0;
          }
          
      });
  
  
  })();
     }
  

}
