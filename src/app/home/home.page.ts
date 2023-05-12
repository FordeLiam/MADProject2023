import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../weather.service'; //Import for api
import { Browser } from '@capacitor/browser' //Import for Browser plugin

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
  
  ngOnInit(): void {

    //api:
    this.weatherServ.WeatherReport().subscribe(
      (data)=>{
        this.myWeather = data.weather;
      }
    );
  }
 
  //info page
  Info() {
    this.navCtrl.navigateForward('/info');
  }
 
  //history page
  History() {
    this.navCtrl.navigateForward('/history');
  }
  
  //contact us page
  ContactUs() {
    this.navCtrl.navigateForward('/contactus');
  }
  
  //browser plugin
  Website(){
      this.openBrowser();
  }
}

