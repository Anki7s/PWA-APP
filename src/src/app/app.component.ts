import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWA-Application';
  update = false;
  quote: any;

  constructor( private updates: SwUpdate, private dataservice: DataService) {
    updates.available.subscribe(event => {
      this.update = true;
    });

  }

  ngOnInit(): void {
    this.dataservice.getJokes().subscribe(res => {
       this.quote = res;
    });
  }
}
