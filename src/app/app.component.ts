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
  myMarker: L.Marker;
  myIcon: L.DivIcon;

  value: number = 7;
  options: Options = {
    floor: 0,
    ceil: 20,
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

    var myIcon = L.icon({
      // iconUrl: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjI0IDM4Ny44MTRWNTEyTDMyIDMyMGwxOTItMTkydjEyNi45MTJDNDQ3LjM3NSAyNjAuMTUyIDQzNy43OTQgMTAzLjAxNiAzODAuOTMgMCA1MjEuMjg3IDE1MS43MDcgNDkxLjQ4IDM5NC43ODUgMjI0IDM4Ny44MTR6Ii8+PC9zdmc+`,
      // iconUrl: `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20d%3D%22M224%20387.814V512L32%20320l192-192v126.912C447.375%20260.152%20437.794%20103.016%20380.93%200%20521.287%20151.707%20491.48%20394.785%20224%20387.814z%22%2F%3E%3C%2Fsvg%3E`,
      iconUrl: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><path d="M224 387.814V512L32 320l192-192v126.912C447.375 260.152 437.794 103.016 380.931 0 521.286 151.707 491.481 394.785 224 387.814z" fill="#fdbf00"/></svg>`,
      // iconUrl: `data:image/svg+xml,<svg height="512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M407.579 87.677C376.506 34.053 321.314 1.292 259.939.04c-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308L409.906 263.8c30.304-55.471 29.435-121.311-2.327-176.123zM256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z" fill="#fdbf00"/></svg>`,
      // iconSize: [38, 95],
    });

    this.myMarker = L.marker([50.505, 30.57], { icon: myIcon, draggable:true }).addTo(map);
    // L.marker([50.505, 30.57]).addTo(map);

  }

  onChange() {  
    this.myIcon = L.divIcon({
      // html: `<span style="height: ${this.value}px; width: ${this.value}px; background-color: ${this.color}; display: inline-block; border-radius: 50%"></span>`,
      // html: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><path d="M224 387.814V512L32 320l192-192v126.912C447.375 260.152 437.794 103.016 380.931 0 521.286 151.707 491.481 394.785 224 387.814z" fill="${this.color}"/></svg>`,
      // html: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" fill="#00ff1d"/><path d="m176.8125 351.210938c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.398437c6.253906-6.253906 16.386718-6.253906 22.636718 0 6.25 6.25 6.25 16.382813 0 22.632813l-158.402343 158.398437c-3.15625 3.136719-7.25 4.695313-11.324219 4.695313zm0 0" fill="#00ff1d"/><path d="m335.1875 351.210938c-4.09375 0-8.191406-1.558594-11.304688-4.695313l-158.398437-158.398437c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.136719-7.230469 4.695313-11.328125 4.695313zm0 0" fill="#00ff1d"/></svg>`,
      html: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/><text x="256" y="386" font-family="sans-serif" font-size="260px" fill="red" text-anchor="middle">125</text></svg>`,
      className: 'dummy',
      iconSize: [64, 64],
      // iconAnchor: L.point(3, 10),
    });
    // console.log('test');
    this.myMarker.setIcon(this.myIcon);
  }
}
