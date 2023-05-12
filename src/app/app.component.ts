import { Component } from '@angular/core';
import { WeatherService } from './weather.service'; //Import the newly created weather service.
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  myWeather:any[]=[];

 constructor(private weatherServ:WeatherService) {}
 ngOnInit(): void { //This method will be ran when this component is activated.
  this.weatherServ.WeatherReport().subscribe(
      (data)=>{
        this.myWeather = data.weather;
      }
    );
    }
  }
