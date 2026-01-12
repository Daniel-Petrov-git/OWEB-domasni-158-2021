import { Component } from '@angular/core';
import { Home } from './components/home/home';
import { Gallery } from './components/gallery/gallery';
import { Cityguide } from './components/cityguide/cityguide';
import { Rating } from './components/rating/rating';

@Component({
  selector: 'app-root',
  imports: [Home, Gallery, Cityguide, Rating],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeTab = 'home';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}