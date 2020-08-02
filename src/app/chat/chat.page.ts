

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
public chatData:Array<any>;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.chatData = [{
      "name": 'Ray Clark Sulit',
      "image": '../../assets/chat/clark.jpeg',
      "description": ' Tara Vape?', 
      "status":'online',
      "count": '2',
      "time":'2 min ago'
    
    }, 
    {
      "name": 'JB Enriquez',
      "image": ' ../../assets/chat/jb.jpeg',
      "description": ' Mahal na Mahal Ko Si ADA', 
      "status":'online',
      "count": '2',
      "time":'10 min ago'
    
    }, 
    {
      "name": 'LBC Outsourced',
      "image": ' ../../assets/chat/lbc.JPG',
      "description": ' @Nath Daaco Pa Repush', 
      "status":'offline',
      "badge":'4',
      "sendTime":'18:34',
      "group": true
      
    }, {
      "name": 'Ryan Cabilin',
      "image": ' ../../assets/chat/ryan.jpeg',
      "description": ' Sapnu Puas', 
      "status":'offline',
      "count": '2',
      "sendTime":'18:30'
 
    }, {
      "name": 'RB Batiancila',
      "image": ' ../../assets/chat/rb.jpeg',
      "description": ' Arat Baba?',
       "status":'online',
       "badge":'6',
      "sendTime":'17:55'
    }, {
      "name": 'Joed Lopez',
      "image": ' ../../assets/chat/joed.jpeg',
      "description": ' Siso Repush', 
      "status":'offline',
      "sendTime":'17:55'
    }
    , {
      "name": 'Kamil Jade Corpuz',
      "image": ' ../../assets/chat/kamil.JPG',
      "description": ' Makikigamit po ng .135', 
      "status":'offline',
      "count": '1',
      "sendTime":'17:50'
    }, {
      "name": 'Nestor',
      "image": ' ../../assets/chat/sirnes.JPG',
      "description": ' Ako na bahala kay Phoebe', 
      "status":'offline',
      "sendTime":'17:40'
    }, {
      "name": 'Alvin Ongay',
      "image": ' ../../assets/chat/alvin.JPG',
      "description": ' Pre nasiraan ako ng motor.',
       "status":'online',
      "count": '6',
      "badge":'8',
      "sendTime":'17:40'
    }, {
      "name": 'Joseph Alamil',
      "image": ' ../../assets/chat/joseph.JPG',
      "description": ' I Love Senior High', 
      "status":'offline',
      "badge":'8',
      "sendTime":'17:40'
    }

    // , {
    //   "name": 'Harrison',
    //   "image": ' ../../assets/chat/user2.jpeg',
    //   "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    //    "status":'offline',
    //   "sendTime":'17:40'
    // }, {
    //   "name": 'Sebastian',
    //   "image": ' ../../assets/chat/user1.jpeg',
    //   "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
    //   "status":'online',
    //   "sendTime":'17:40'
    // }, {
    //   "name": 'Zachary',
    //   "image": ' ../../assets/chat/user4.jpeg',
    //   "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
    //   "status":'offline',
    //   "sendTime":'17:40'
    // }, {
    //   "name": 'Elijah',
    //   "image": ' ../../assets/chat/user3.jpeg',
    //   "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    //   "status":'offline',
    //   "badge":'8',
    //   "sendTime":'17:40'
    // }
    ]
  
  }

  openChat(user) {
    console.log(this.chatData[user].name);
    this.router.navigateByUrl('/privatemessages')
    localStorage.setItem("image",this.chatData[user].image);
    localStorage.setItem("receiver",this.chatData[user].name);
    
  }

}
