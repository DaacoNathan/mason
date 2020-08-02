import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'leaflet-control-geocoder';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



declare var L: any;

var lng = 0;
var lat = 0;
var latlng:any;
var nearbylatlng = 0;
var myLat = 0;
var myLong = 0;
var mylatlng = 0;

var marker;

var markerpulseID;


var mymap;

var pulseIcon = L.icon({
  iconUrl: '/assets/images/pulse.gif',

  iconSize: [150, 150],
  shadowSize: [50, 64],
  popupAnchor: [-3, -20]
});


var tao = L.icon({
  iconUrl: '/assets/images/userlocation.gif',

  iconSize: [50, 50],
  shadowSize: [50, 64],
  popupAnchor: [-3, -20]
});


var tao2 = L.icon({
  iconUrl: '/assets/icon/tao.jpg',

  iconSize: [50, 50],
  shadowSize: [50, 64],
  popupAnchor: [-3, -20]
});
var showDirections: boolean = false;
var myName = localStorage.getItem("Username")
var customPopup = ""
var customPopup2 = ""
var customOptions =
{
  'maxWidth': 'auto',
  'minWidth': 'auto',
  'minHeight': 'auto',
  'maxHeight': 'auto'
}
var selectedLatlng;


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})

export class Tab3Page {
  // @ViewChild('map') mapContainer: ElementRef;
  showMe: any;
  data: any = {};
  map: any;
  regAs: any;
  occup: any;
  loading: any;
  public marker2: any = [];
  public markpulse: any =[];
  filterByOc:boolean =false;
  showDirectionValue: boolean = true;
  constructor(public loadingController: LoadingController, public httpClient: HttpClient, private http: Http, public navCtrl: NavController, public alertController: AlertController, private localNotifications: LocalNotifications) {

  }



  ionViewDidEnter() {

    this.loadmap();
    //this.loadmapSearch();

  }

  //refreshbutton
  refreshNearby() {


    this.showNearbyMembers();
  }

  async presentLoading() {
    await this.loadingController.create({
      message: 'Refreshing Nearby Please Wait...'
    }).then(loading => loading.present());
  }

  async closeLoading() {
    this.loadingController.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Error Fetching Data! \n Please Check Your Network Connection!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertNew() {
    const alert = await this.alertController.create({
      header: 'SOS SIGNAL!',
      message: 'Someone fire a SOS Signal. You may want to check it out.',
      buttons: ['OK']
    });

    await alert.present();
  }





  showNotif() {
    this.localNotifications.schedule({
      title: 'Hey Pal!',
      text: 'Hey Pal!',
      actions: [
        { id: 'yes', title: 'Yes' },
        { id: 'no', title: 'No' }
      ],
    });

    this.localNotifications.on('yes').subscribe(notification => {
      this.presentAlert();
    });
  }
  loadmap() {


      customPopup = "<img src='/assets/images/personLogo.png' width='500px' style='border-radius:50%;'/><br/><p style='overflow:hidden; white-space: nowrap; text-overflow:clip;'><ion-icon name='contact'></ion-icon><b> Name: </b>"+localStorage.getItem("fullname")+"<br/><ion-icon name='build'></ion-icon><b> Occupation: </b>"+localStorage.getItem("occupation")+"<br/><ion-icon name='call'></ion-icon><b> Contact: </b>"+localStorage.getItem("mobile_number")+"</p>";
    

    navigator.geolocation.getCurrentPosition(function (location) {
      mymap = Leaflet.map('map').setView([lat, lng], 18);
      latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
      console.log(latlng);
      marker = Leaflet.marker(latlng, { icon: tao }).addTo(mymap).bindPopup(customPopup, customOptions);
   
      Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGRhYWNvNzgiLCJhIjoiY2p0ajE1dGVwMGlkMzQ5bWRhdXNzbHluMiJ9.zA0f7OVGLu_j_iQ9fetATw', {
        zoom: 8,
        maxZoom: 18,
        minZoom: 4,
        minResolution: 4891.96981025128,
        maxResolution: 39135.75848201024,
        doubleClickZoom: true,
        center: latlng
      }).addTo(mymap);
      mymap.panTo(latlng);
    });
  }

  showDirections() {
    var myDirection = Leaflet.Routing.control({

      waypoints: [
        Leaflet.latLng(latlng),
        Leaflet.latLng(selectedLatlng)
      ],
      routeWhileDragging: true,
      geocoder: Leaflet.Control.Geocoder.nominatim()
    }).addTo(mymap);
  }

  showNearbyAmbulance() {

  }

  showSelectValue(regAs) {
    if (regAs == "Show") {

      this.showNearbyMembers();

    }
    else {

      this.doNotShowNearbyMembers();
    }

  }

  showMeOnNearby(showMe) {
  
    if (showMe) {
      this.markpulse = Leaflet.marker(latlng, { icon: pulseIcon }).addTo(mymap);
      var link = 'http://139.99.68.162:1998/api/v1/customer_information/'+localStorage.getItem("id");
        this.httpClient.put(link,

        {
        "id":localStorage.getItem("id"),
        "Latitude":latlng.lat.toString(),
        "Longitude":latlng.lng.toString(),
        "isVisible":1

      }
        
        )
        .subscribe(data => {

        }, error => {

        });
    }
    else {
      mymap.removeLayer(this.markpulse);
      var link = 'http://139.99.68.162:1998/api/v1/customer_information/'+localStorage.getItem("id");
        this.httpClient.put(link,

        {
          "id":localStorage.getItem("id"),
          "Latitude":latlng.lat.toString(),
          "Longitude":latlng.lng.toString(),
          "isVisible":0
  

      }
        
        )
        .subscribe(data => {

        }, error => {
          console.log("Oooops!");
        });
    }

  }

  showNearbyMembers() {

    var link = 'http://139.99.68.162:1998/api/v1/location_information/'+localStorage.getItem("id");
   
    this.presentLoading();
    this.httpClient.get(link
      
      )
      .subscribe((data:any) => {
        this.closeLoading();
        console.log(data)
        
        for(let ctr=0; ctr<this.marker2.length; ctr++) {
          if(this.marker2.length!=0) {
            mymap.removeLayer(this.marker2[ctr]);
          }
        }
        for (var counter = 0; counter < data.data.length; counter++) {
          let img = "<img src='/assets/images/personLogo.png' width='500px' style='border-radius:50%;'/>"
          customPopup2 = img + "<br/><p style='overflow:hidden; white-space: nowrap; text-overflow:clip;'><ion-icon name='contact'></ion-icon><b> Name: </b>" + data.data[counter].name+"<br/><ion-icon name='build'></ion-icon><b> Occupation: </b>" + data.data[counter].occupation + "<br/><ion-icon name='call'></ion-icon><b> Contact: </b>" + data.data[counter].mobile + "</p>"+"<center><ion-button><b>Contact Me</b></ion-button></center>";
            this.marker2[counter] = Leaflet.marker(new L.LatLng(data.data[counter].Latitude, data.data[counter].Longitude), { icon: tao2 }).addTo(mymap).bindPopup(customPopup2, customOptions)
        }
        console.log(this.marker2);
        this.closeLoading();
        this.filterByOc = true;
      }, error => {
        console.log("Oooops!");
        this.closeLoading();
        this.presentAlert();
      
      });
  }

  doNotShowNearbyMembers() {
    for(let ctr=0; ctr<this.marker2.length; ctr++) {
      if(this.marker2.length!=0) {
        mymap.removeLayer(this.marker2[ctr]);
      }
    }
    this.filterByOc = false;
  }

  filterByOccupation(occup) {
    console.log(occup)
  }
}
