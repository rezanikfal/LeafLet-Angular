import { Component } from '@angular/core';
import * as L from 'Leaflet';
import '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import '../../node_modules/leaflet/dist/images/marker-shadow.png';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color: string = 'red';
  myMarker : L.Marker
  myIcon : L.DivIcon

  value: number = 7;
  options: Options = {
    floor: 0,
    ceil: 20
  };

  ngOnInit() {
    var map = L.map('map', {
      center: [40, 0],
      zoom: 3,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>',
    }).addTo(map);

    this.myIcon = L.divIcon({
      html: `<span style="height: 7px; width: 7px; background-color: ${this.color}; display: inline-block; border-radius: 50%"></span>`,
      className: 'dummy',
      iconAnchor: L.point(3, 10),
    });
    // you can set .my-div-icon styles in CSS
    this.myMarker = L.marker([50.505, 30.57], { icon: this.myIcon }).addTo(map);
    L.marker([50.505, 30.57]).addTo(map);
  }

  onChange(){
    this.myIcon = L.divIcon({
      html: `<span style="height: ${this.value}px; width: ${this.value}px; background-color: ${this.color}; display: inline-block; border-radius: 50%"></span>`,
      className: 'dummy',
      iconAnchor: L.point(3, 10),
    });
    // console.log('test');
    this.myMarker.setIcon(this.myIcon)
  }


}
