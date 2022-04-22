import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewUser = false;
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
