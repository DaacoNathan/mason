// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-privatemessages',
//   templateUrl: './privatemessages.page.html',
//   styleUrls: ['./privatemessages.page.scss'],
// })
// export class PrivatemessagesPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-privatemessages',
  templateUrl: './privatemessages.page.html',
  styleUrls: ['./privatemessages.page.scss'],
})
export class PrivatemessagesPage implements OnInit {
  public senderName = localStorage.getItem("receiver");

  conversation = [
    { text: 'Hello!', sender: 0, senderName:localStorage.getItem("receiver") ,image: localStorage.getItem("image")},
    { text: 'Hi', sender: 1, image: '/assets/img/samplePhoto.jpg', read: true, delivered: true, sent: true },
    { text: 'Rosas ka ba?', sender: 0,senderName:localStorage.getItem("receiver") , image: localStorage.getItem("image")},
    { text: 'Bakit?', sender: 1, image: '/assets/img/samplePhoto.jpg', read: true, delivered: true, sent: true },
    { text: 'Kasi Sa Spaceship isasakay kita.',senderName:localStorage.getItem("receiver") , sender: 0, image: localStorage.getItem("image") },
    { text: 'Boom', sender: 1, image: '/assets/img/samplePhoto.jpg', read: false, delivered: true, sent: true },
    { text: 'Parang Neneng B ang Kanyang Katawan', sender: 0,senderName:localStorage.getItem("receiver") , image: localStorage.getItem("image")},
    { text: 'Pulis ka ba? ', sender: 1, image: '/assets/img/samplePhoto.jpg', read: false, delivered: false, sent: true }

  ]
 
  input = '';

  constructor(private platform: Platform,
    public alertController: AlertController,  private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
    
  }



  send() {
    if (this.input != '') {
      this.conversation.push({ text: this.input, sender: 1, image: '/assets/img/samplePhoto.jpg',read: false, delivered: false, sent: true });
      this.input = '';
      setTimeout(() => {
        this.scrollToBottom()
      }, 10)
    }
  }

  scrollToBottom(){
    let content = document.getElementById("chat-container");
    let parent = document.getElementById("chat-parent");
    let scrollOptions = {
      left: 0,
      top: content.offsetHeight
    }
    
    parent.scrollTo(scrollOptions)
  }


}


