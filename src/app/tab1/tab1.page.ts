import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public Agriculture: boolean = false;
  public ArchitectureAndDesign: boolean = false;
  public Business: boolean = false;
  data:any = {};
  public eventData:Array<any>;
  
 
  constructor(public httpClient: HttpClient,private http: Http,public alertController: AlertController)
  {

  }
  

  

  ngOnInit()
  {
    this.eventData = [{
      "location": 'Tugatog,Malabon',
      "title": 'Walwalan Sa Malabon',
      "description": 'Halika at sumama sa walwalan sa Malabon. Alak na naman! Lezzgo! Halika at sumama sa walwalan sa Malabon. Alak na naman! Lezzgo! Halika at sumama sa walwalan sa Malabon. Alak na naman! Lezzgo! Halika at sumama sa walwalan sa Malabon. Alak na naman! Lezzgo! Halika at sumama sa walwalan sa Malabon. Alak na naman! Lezzgo! Halika at sumama sa walwalan sa Malabon. Alak na naman! Lezzgo!',
      "picture": "/assets/img/event.png"
    },
    {
      "location": 'Barangay 155,Caloocan City',
      "title": 'Meeting sa Caloocan.',
      "description": 'We have a meeting @4:00PM at Barangay 155, Caloocan City', 
      "picture": "/assets/img/meeting.png"
    }
  ]
  }

  sendPostRequest() {
    
  }


}
