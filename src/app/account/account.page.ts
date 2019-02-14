import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  name: any;
  location: any;

  constructor() { }

  ngOnInit() {
  }

  submitMyDetails(){
    console.log("My Nick Name ", this.name);
    console.log("My Location ", this.location);
  }
}
