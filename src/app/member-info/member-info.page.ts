import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.page.html',
  styleUrls: ['./member-info.page.scss'],
})
export class MemberInfoPage implements OnInit {

  name: any;
  memberID: any;
  contact: any;
  occupation: any;
  membersince: any;
  picture: any;
  constructor(public router: Router) { }

  ngOnInit() {
    
      this.name = localStorage.getItem("scannedName");
      this.contact = localStorage.getItem("scannedContact")
      this.occupation =localStorage.getItem("scannedOccupation")
      this.membersince="2019-11-27";
      this.picture = "/assets/images/personLogo.png";
      this.memberID = localStorage.getItem("scannedID");
   
  }

  goback() {
    this.router.navigateByUrl("/tabs");
  }

}
