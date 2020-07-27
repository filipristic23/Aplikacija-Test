import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8tutorial';
  user: string;
  userlogin: boolean;
  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    if (localStorage.getItem('UserMail') !== null) {
      this.user = localStorage.getItem('UserMail');
      this.userlogin = true;
    }
    else {
      this.user = '';
      this.userlogin = false;
    }
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
  Logout() {
    localStorage.clear();
    //this.router.navigate(['/login']);
    window.location.href = '/login';
  }
}
