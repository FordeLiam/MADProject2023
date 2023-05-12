import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../weather.service'; //Import the newly created weather service.
import { Browser } from '@capacitor/browser' // import Browser from Capacitor Browser plugin

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myWeather:any[]=[];
  constructor(private weatherServ:WeatherService, private navCtrl: NavController) {}
  
    async openBrowser() {
      await Browser.open({ url: 'https://www.met.ie/' });
    }
  
  ngOnInit(): void { //This method will be ran when this component is activated.

      //Also get Weather Data
    this.weatherServ.WeatherReport().subscribe(
      (data)=>{
        this.myWeather = data.weather;
      }
    );
  }
  Info() {
    this.navCtrl.navigateForward('/info');
  }
  History() {
    this.navCtrl.navigateForward('/history');
  }
  ContactUs() {
    this.navCtrl.navigateForward('/contactus');
  }
  Website(){
      this.openBrowser();
  }
}

