import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = 'no user was created!';
  userName = '';
  userCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateUser() {
    this.userCreated = true;
    this.userCreationStatus = 'user was created';
  }
  onUpdateUser(event: any) {
    this.userName = event.target.value;
  }
}
