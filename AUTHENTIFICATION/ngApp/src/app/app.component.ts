import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngApp';
  // isLoggedIn = false;

  constructor(private authService: AuthService) { }

  logoutUser() {
    this.authService.logoutUser();
  }

  isLoggedIn = () => this.authService.loggedIn();


}
