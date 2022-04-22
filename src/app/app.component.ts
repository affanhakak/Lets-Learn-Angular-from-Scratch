import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Course';
  status = 'Excellent';
  rating = '9 out of 10';

  getStatus() {
    return this.status;
  }
}
