import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBZ0rUCTYml-mdWIoEkgzFrSeRFgvi9vxE",
  authDomain: "todo-2986a.firebaseapp.com",
  databaseURL: "https://todo-2986a.firebaseio.com",
  projectId: "todo-2986a",
  storageBucket: "todo-2986a.appspot.com",
  messagingSenderId: "983419197909"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
