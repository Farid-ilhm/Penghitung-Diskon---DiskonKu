import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
    this.setupBackButton();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide().catch(err => console.log('Splash screen hide error:', err));
    });
  }

  setupBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      const url = this.router.url;
      if (url === '/tabs/kalkulator' || url === '/') {
        App.exitApp();
      } else {
        this.router.navigate(['/tabs/kalkulator']);
      }
    });
  }
}
