import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}
  coordinates:any = "";
  lat:number = 0;
  long:number = 0;
  time:any = 0;

  //Method to handle getting our gps location
  async getGPS(){
    this.coordinates = await Geolocation.getCurrentPosition();
    this.long = this.coordinates.coords.longitude;
    this.lat = this.coordinates.coords.latitude;
    this.time = new Date(this.coordinates.timestamp);
  }

  //Method to handle our browser plugin
  async openBrowser(){
    //This line will open the browser in a new tab for us once the button is clicked
    await Browser.open({ url: 'https://vlegalwaymayo.atu.ie/' });
  }
}
