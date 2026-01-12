import { Component } from '@angular/core';
import { CityGuideItem, GUIDE_DATA, GuideAttraction } from '../../db-data';

@Component({
  selector: 'app-cityguide',
  templateUrl: './cityguide.html',
  styleUrl: './cityguide.css'
})
export class Cityguide {
    attractions: GuideAttraction[] = [];  
    restaurants: GuideAttraction[] = [];
    tips: string[]=[];
    ngOnInit(): void {
    const guide: CityGuideItem = GUIDE_DATA[0];

    this.attractions = guide.attractions;
    this.restaurants = guide.restaurants;
    this.tips = guide.tips;
  }
}